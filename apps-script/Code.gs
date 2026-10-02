const TEAM_IDS = ['01', '02', '03', '04']
const SCORE_FIELDS = [
  { key: 'swarmRobotics', label: 'Swarm Robotics' },
  { key: 'ai', label: 'AI' },
  { key: 'sdg5', label: 'SDG5' },
  { key: 'sdg10', label: 'SDG10' },
]

function doPost(event) {
  const body = event && event.postData && event.postData.contents
  if (!body) throw new Error('The request body is required.')

  const votes = JSON.parse(body)
  if (!Array.isArray(votes) || votes.length !== TEAM_IDS.length) {
    throw new Error('A ballot must contain one vote for each team.')
  }

  const votesByTeam = new Map()
  const voterId = String(votes[0] && votes[0].voterId || '').trim()
  if (!voterId) throw new Error('A voter ID is required.')

  votes.forEach((vote) => {
    if (!vote || !TEAM_IDS.includes(vote.teamId) || votesByTeam.has(vote.teamId)) {
      throw new Error('The ballot contains an invalid or duplicate team.')
    }
    if (String(vote.voterId || '').trim() !== voterId) {
      throw new Error('All team votes must have the same voter ID.')
    }

    SCORE_FIELDS.forEach(({ key }) => {
      if (!Number.isInteger(vote[key]) || vote[key] < 1 || vote[key] > 5) {
        throw new Error('Every criterion score must be an integer from 1 to 5.')
      }
    })

    votesByTeam.set(vote.teamId, vote)
  })

  if (TEAM_IDS.some((teamId) => !votesByTeam.has(teamId))) {
    throw new Error('The ballot must contain one vote for each team.')
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submission Time', 'Voter ID', 'Team ID', 'Team Name', ...SCORE_FIELDS.map(({ label }) => label)])
  }

  const submittedAt = new Date()
  const rows = TEAM_IDS.map((teamId) => {
    const vote = votesByTeam.get(teamId)
    return [submittedAt, voterId, teamId, vote.teamName, ...SCORE_FIELDS.map(({ key }) => vote[key])]
  })
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows)

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success', saved: rows.length }))
    .setMimeType(ContentService.MimeType.JSON)
}
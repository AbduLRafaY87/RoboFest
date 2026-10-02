import { useState } from 'react'
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react'
import './styles.css'

const PAGE_PASSWORD = '1570'
const VOTING_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx7FlKdwgsVLbBBM1TfIoF_DlXI86MPzGLi3AKnABi-Go58YM28eVNOSpc-NmMv9kOWiA/exec'
const criteria = ['Swarm Robotics', 'AI', 'SDG5', 'SDG10']

const teams = [
  {
    id: '01',
    name: 'ACS Tech team 1',
    members: ['Anabiya', 'Mahwish', 'Rida'],
    school: 'Alyabad community school',
    image: '/images/Sampleimage.jfif',
  },
  {
    id: '02',
    name: 'IUSS Safoora Campus Team',
    members: ['Dhrushyl', 'M.Haider'],
    school: 'Iuss Safoora Campus ',
    image: '/images/Sampleimage.jfif',
  },
  {
    id: '03',
    name: 'IUSS Safoora Campus Team',
    members: ['Hassan Raza', 'Mayash', 'Shadman Raza'],
    school: 'Iuss Safoora Campus ',
    image: '/images/Sampleimage.jfif',
  },
  {
    id: '04',
    name: 'RoboNova',
    members: ['Aleena', 'Fazila', 'Shabana'],
    school: 'Sultanabad Community School ',
    image: '/images/Sampleimage.jfif',
  },
]

const ScienceExhibitionVoting = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [voterId, setVoterId] = useState('')
  const [gateError, setGateError] = useState('')
  const [ratings, setRatings] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const totalRatings = teams.length * criteria.length
  const completedRatings = teams.reduce(
    (total, team) => total + criteria.filter((criterion) => ratings[team.id]?.[criterion] !== undefined).length,
    0,
  )
  const allRatingsComplete = completedRatings === totalRatings

  const setRating = (teamId, criterion, score) => {
    setRatings((current) => ({
      ...current,
      [teamId]: { ...current[teamId], [criterion]: score },
    }))
  }

  const handleUnlock = (event) => {
    event.preventDefault()

    if (!voterId.trim()) {
      setGateError('Enter your voter ID.')
      return
    }

    if (password !== PAGE_PASSWORD) {
      setGateError('That password is not correct. Please try again.')
      return
    }

    setIsUnlocked(true)
    setGateError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!allRatingsComplete || isSubmitting || isSubmitted) return

    setIsSubmitting(true)
    setSubmitError('')

    const votes = teams.map((team) => ({
      voterId: voterId.trim(),
      teamId: team.id,
      teamName: team.name,
      swarmRobotics: ratings[team.id]['Swarm Robotics'],
      ai: ratings[team.id].AI,
      sdg5: ratings[team.id].SDG5,
      sdg10: ratings[team.id].SDG10,
    }))

    try {
      await fetch(VOTING_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(votes),
      })
      setIsSubmitted(true)
    } catch {
      setSubmitError('Unable to send your votes. Check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="science-voting-page">
      {!isUnlocked ? (
        <section className="voting-gate" aria-labelledby="voting-gate-title">
          <div className="gate-icon" aria-hidden="true"><LockKeyhole size={22} /></div>
          <p className="voting-eyebrow">RoboFest 2026</p>
          <h1 id="voting-gate-title">Science Exhibition Voting</h1>
          <p className="gate-copy">Enter your voter ID and voting password to continue.</p>
          <form className="gate-form" onSubmit={handleUnlock}>
            <label htmlFor="voter-id">Voter ID</label>
            <input
              id="voter-id"
              type="text"
              autoComplete="off"
              value={voterId}
              onChange={(event) => setVoterId(event.target.value)}
              aria-describedby={gateError ? 'gate-error' : undefined}
              required
            />
            <label htmlFor="voting-password">Voting password</label>
            <input
              id="voting-password"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-describedby={gateError ? 'gate-error' : undefined}
              required
            />
            {gateError && <p className="form-error" id="gate-error" role="alert">{gateError}</p>}
            <button className="voting-button" type="submit">
              Continue <ArrowRight size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      ) : (
        <div className="voting-content">
          <header className="voting-header">
            <p className="voting-eyebrow">Robot meet culture</p>
            <h1>Science Exhibition Voting</h1>
            <p>Score each team from 1 to 5 across four criteria.</p>
          </header>

          <form className="team-list" onSubmit={handleSubmit}>
            {teams.map((team, index) => (
              <article className="team-card" key={team.id}>
                <img className="team-photo" src={team.image} alt={`${team.name} project`} />
                <div className="team-details">
                  <p className="team-number">Team {String(index + 1).padStart(2, '0')}</p>
                  <h2>{team.name}</h2>
                  <dl className="team-info">
                    <div>
                      <dt>Members</dt>
                      <dd>{team.members.join(', ')}</dd>
                    </div>
                    <div>
                      <dt>School</dt>
                      <dd>{team.school}</dd>
                    </div>
                  </dl>
                </div>
                <fieldset className="rating-fieldset">
                  <legend>Score each criterion</legend>
                  <div className="criterion-list">
                    {criteria.map((criterion) => {
                      const score = ratings[team.id]?.[criterion] ?? 1

                      return (
                        <label className="criterion-row" key={criterion}>
                          <span>{criterion}</span>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            value={score}
                            aria-label={`${criterion} score for ${team.name}`}
                            aria-valuetext={`${score} out of 5`}
                            onPointerDown={(event) => setRating(team.id, criterion, Number(event.currentTarget.value))}
                            onKeyDown={(event) => {
                              if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) {
                                setRating(team.id, criterion, Number(event.currentTarget.value))
                              }
                            }}
                            onChange={(event) => setRating(team.id, criterion, Number(event.target.value))}
                          />
                          <output>{score}</output>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              </article>
            ))}

            <div className="submit-row">
              <p className="submit-note" aria-live="polite">
                {allRatingsComplete ? `All ${totalRatings} scores are set.` : `${totalRatings - completedRatings} scores remaining.`}
              </p>
              <button className="voting-button submit-button" type="submit" disabled={isSubmitted || isSubmitting || !allRatingsComplete}>
                {isSubmitted ? <><CheckCircle2 size={18} /> Sent</> : isSubmitting ? 'Sending…' : 'Submit votes'}
              </button>
            </div>
            {submitError && <p className="form-error" role="alert">{submitError}</p>}
            {isSubmitted && <p className="submit-confirmation" role="status">Vote request sent. Please confirm the rows appeared in the Google Sheet.</p>}
          </form>
        </div>
      )}
    </main>
  )
}

export default ScienceExhibitionVoting
import { useState } from 'react'
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react'
import './styles.css'

const PAGE_PASSWORD = '1570'
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
  const [passwordError, setPasswordError] = useState('')
  const [ratings, setRatings] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
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

    if (password !== PAGE_PASSWORD) {
      setPasswordError('That password is not correct. Please try again.')
      return
    }

    setIsUnlocked(true)
    setPasswordError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!allRatingsComplete) return

    setIsSubmitted(true)
    window.setTimeout(() => window.location.reload(), 1200)
  }

  return (
    <main className="science-voting-page">
      {!isUnlocked ? (
        <section className="voting-gate" aria-labelledby="voting-gate-title">
          <div className="gate-icon" aria-hidden="true"><LockKeyhole size={22} /></div>
          <p className="voting-eyebrow">RoboFest 2026</p>
          <h1 id="voting-gate-title">Science Exhibition Voting</h1>
          <p className="gate-copy">Enter the voting password to continue.</p>
          <form className="gate-form" onSubmit={handleUnlock}>
            <label htmlFor="voting-password">Voting password</label>
            <input
              id="voting-password"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-describedby={passwordError ? 'password-error' : undefined}
              required
            />
            {passwordError && <p className="form-error" id="password-error" role="alert">{passwordError}</p>}
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
              <button className="voting-button submit-button" type="submit" disabled={isSubmitted || !allRatingsComplete}>
                {isSubmitted ? <><CheckCircle2 size={18} /> Submitted</> : 'Submit votes'}
              </button>
            </div>
            {isSubmitted && <p className="submit-confirmation" role="status">Thank you. Refreshing your page :&bracket;</p>}
          </form>
        </div>
      )}
    </main>
  )
}

export default ScienceExhibitionVoting
import { useState } from 'react'
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react'
import './styles.css'

const PAGE_PASSWORD = '1570'

const teams = [
  {
    id: 'sample-team-01',
    name: 'Sample Team 01',
    members: ['Member One', 'Member Two'],
    school: 'School Name',
    image: '/images/Sampleimage.jfif',
  },
  {
    id: 'sample-team-02',
    name: 'Sample Team 02',
    members: ['Member One', 'Member Two'],
    school: 'School Name',
    image: '/images/Sampleimage.jfif',
  },
  {
    id: 'sample-team-03',
    name: 'Sample Team 03',
    members: ['Member One', 'Member Two'],
    school: 'School Name',
    image: '/images/Sampleimage.jfif',
  },
]

const ScienceExhibitionVoting = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [ratings, setRatings] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

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
            <p className="voting-eyebrow">RoboFest 2026 · Judges&apos; ballot</p>
            <h1>Science Exhibition Voting</h1>
            <p>Rate every team from 1 to 5, with 5 as the highest score.</p>
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
                  <legend>Score this team</legend>
                  <div className="rating-scale">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <label className="rating-option" key={score}>
                        <input
                          type="radio"
                          name={`rating-${team.id}`}
                          value={score}
                          checked={ratings[team.id] === score}
                          onChange={() => setRatings((current) => ({ ...current, [team.id]: score }))}
                          required
                        />
                        <span>{score}</span>
                      </label>
                    ))}
                  </div>
                  <div className="scale-labels"><span>Low</span><span>High</span></div>
                </fieldset>
              </article>
            ))}

            <div className="submit-row">
              <p className="submit-note">Your ballot includes {teams.length} teams.</p>
              <button className="voting-button submit-button" type="submit" disabled={isSubmitted}>
                {isSubmitted ? <><CheckCircle2 size={18} /> Submitted</> : 'Submit votes'}
              </button>
            </div>
            {isSubmitted && <p className="submit-confirmation" role="status">Thank you. Refreshing your ballot…</p>}
          </form>
        </div>
      )}
    </main>
  )
}

export default ScienceExhibitionVoting
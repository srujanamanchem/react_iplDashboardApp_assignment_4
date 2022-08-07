import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails
  return (
    <div className="latest-match-details">
      <div className="team-details">
        <h1 className="team-name">{competingTeam}</h1>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="match-result">{result}</p>
      </div>
      <img src={competingTeamLogo} alt={competingTeam} className="team-logo" />
      <div className="team-innings">
        <h1 className="innings-heading">First Innings</h1>
        <p className="innings">{firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="innings">{secondInnings}</p>
        <h1 className="innings-heading">Man of the Match</h1>
        <p className="innings">{manOfMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
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
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="match-details">{venue}</p>
        <p className="match-details">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />

      <div className="team-innings">
        <p className="innings-heading">First Innings</p>
        <p className="innings">{firstInnings}</p>
        <p className="innings-heading">Second Innings</p>
        <p className="innings">{secondInnings}</p>
        <p className="innings-heading">Man of the Match</p>
        <p className="innings">{manOfTheMatch}</p>
        <p className="innings-heading">Umpires</p>
        <p className="innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

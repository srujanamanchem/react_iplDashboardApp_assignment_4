import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = matchCardDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li className="team-match">
      <img
        src={competingTeamLogo}
        alt={` competing team ${competingTeam}`}
        className="recent-team-image"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

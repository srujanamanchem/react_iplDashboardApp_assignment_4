import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = matchCardDetails
  return (
    <li className="team-match">
      <img src={competingTeamLogo} alt={competingTeam} />
      <h1 className="team-name">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard

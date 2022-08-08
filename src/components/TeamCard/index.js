import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, id, teamImageUrl} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-match-card">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="team-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

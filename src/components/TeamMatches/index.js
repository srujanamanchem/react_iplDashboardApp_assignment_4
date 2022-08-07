import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchData: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/:${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_Matches,
    }
    this.setState({teamMatchData: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchData
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfMatch: latestMatchDetails.man_of_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.matchStatus,
    }

    const recentMatchesDetails = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfMatch: each.man_of_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.matchStatus,
    }))

    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#ffffff" width={50} height={50} />
      </div>
    ) : (
      <div className="team-matches-card">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <h1 className="team-heading">Latest Matches</h1>
        <LatestMatch matchDetails={updatedLatestMatchDetails} />
        <ul className="matches-list">
          {recentMatchesDetails.map(each => (
            <MatchCard matchCardDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches

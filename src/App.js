import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from './components/TeamCard'

import './App.css'

class App extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedTeamsList = data.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsList} = this.state
    return (
      <ul className="teams-list">
        {teamsList.map(eachTeam => (
          <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderTeamsList()
    )
  }
}

export default App

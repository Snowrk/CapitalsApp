import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  dpy = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const {country} = countryAndCapitalsList.filter(
      item => item.id === activeId,
    )[0]
    return (
      <div className="bg">
        <div className="bg-1">
          <h1>Countries And Capitals</h1>
          <select
            id="countries"
            onChange={this.dpy}
            value={activeId}
            className="box"
          >
            {countryAndCapitalsList.map(item => (
              <option value={item.id} key={item.id}>{item.capitalDisplayText}</option>
            ))}
          </select>
          <label htmlFor="countries">is capital of which country?</label>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

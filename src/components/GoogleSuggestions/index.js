import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

export default class GoogleSuggestions extends Component {
  state = {searchInput: '', value: ''}

  changeSearchInput = event =>
    this.setState(() => ({
      searchInput: event.target.value,
      value: event.target.value,
    }))

  settingValue = suggestion => {
    this.setState({value: suggestion})
  }

  render() {
    const {searchInput, value} = this.state
    const {suggestionsList} = this.props
    const filteredSuggests = suggestionsList.filter(each => {
      const temp = each.suggestion.toLowerCase()
      return temp.includes(searchInput.toLowerCase())
    })
    return (
      <div className="bg">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-element"
                value={value}
                onChange={this.changeSearchInput}
              />
            </div>
            <ul className="suggestions-list">
              {filteredSuggests.map(each => (
                <SuggestionItem
                  suggestion={each.suggestion}
                  key={each.id}
                  settingValue={this.settingValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

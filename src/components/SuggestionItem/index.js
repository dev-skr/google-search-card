import './index.css'

const SuggestionItem = props => {
  const {suggestion, settingValue} = props
  const putSearch = () => {
    settingValue(suggestion)
  }
  return (
    <li className="search-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={putSearch}
      />
    </li>
  )
}

export default SuggestionItem

import React , { Component } from "react";
import './Search.css'
class Search extends Component {
  render() {
    const props = this.props
    return (
        <input
          type='search'
          className={`search-box ${props.className}`}
          placeholder={props.placeholder}
          onChange={ props.onChangeHandler }
        />
    )
  }
}
export default Search;
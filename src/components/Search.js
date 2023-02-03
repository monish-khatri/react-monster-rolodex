import React from "react";
import './Search.css'

const Search = ({className, placeholder,onChangeHandler}) => (
  <input
    type='search'
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={ onChangeHandler }
  />
)
export default Search;
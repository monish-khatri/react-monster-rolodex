import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Listing from './components/Listing';
import Search from './components/Search';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: ''
    }
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState(() => {
      return {
        monsters: users
      }
    }))
  }
  searchMonster = (event) => {
    const searchText = event.target.value.toLowerCase().trim()
    this.setState(() => {
      return {
        searchText
      }
    })
  }
  render() {
    const {monsters, searchText} = this.state;
    const {searchMonster} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <Search placeholder='Search Monsters' className='monsters-search-box' onChangeHandler={searchMonster}/>
        <Listing data={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

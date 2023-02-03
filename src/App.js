import './App.css';
import {useState, useEffect} from 'react';
import Listing from './components/Listing';
import Search from './components/Search';



const App = () => {
  const [searchText, setSearchText] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchText)
      })
      setFilteredMonsters(newFilteredMonsters)
  }, [searchText, monsters])

  const  searchMonster = (event) => {
    const searchTextString = event.target.value.toLowerCase().trim()
    setSearchText(searchTextString)
  }
  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <Search placeholder='Search Monsters' className='monsters-search-box' onChangeHandler={searchMonster}/>
      <Listing data={filteredMonsters}/>
    </div>
  );
}

export default App;

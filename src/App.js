import {Component} from 'react';
import CardList from './Components/card-list/card-list.cmponent';
import './App.css';
import SearchBox from './Components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users};
    })
    );
  }

  onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
      });
  };

  render() {
    //console.log('render from Appjs');
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className='App'>
      <SearchBox className='search-box' onChangeHandler = {onSearchChange} placeholder= {'search monsters'} />
      <CardList monsters = {filteredMonsters}/>
    </div>
    );
  }
}

export default App;

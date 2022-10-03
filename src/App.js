import { useState } from 'react';
import './App.css';
import {Users} from './users';
import Table from './components/Table';

function App() {

  const [query, setQuery] = useState("");

  const keys = [
    "first_name",
    "last_name",
    "email"
  ] // keys to search in the data-array

  console.log(Users[0])

  const search = (data) => {
    return data.filter(
      (item) =>
       keys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  return (
    <div className="app">
      <input
      type="text"
      placeholder="Search..."
      className="search"
      onChange={e => setQuery(e.target.value)}/>
      
      <Table data={search(Users)}/>
      
    </div>
  );
}

export default App;

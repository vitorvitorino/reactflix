import './App.css';
import Navbar from './Components/Navbar'
import HomeView from "./Components/HomeView"
import AboutView from "./Components/AboutView"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import SearchView from './Components/SearchView';
import { useState, useEffect, useRef } from 'react';
import MovieView from './Components/MovieView'
import NotFoundView from './Components/NotFoundView';

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')
  let totalResults = useRef(null)
  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=87b5d035fafbbeedf5aa84b05be21f92&query=${searchText}&include_adult=false&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
        totalResults.current = Number(data.total_results)
      })
    }
  }, [searchText])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/about" component={ AboutView } />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
          {totalResults.current === 0 && 
          <div className='container my-5'>
            <h1 className='text-center'>The film you typed does not exist... yet? Maybe some day it will!</h1>
            </div>}
        </Route>
        <Route path="/movies/:id" component={ MovieView } />
        <Route component={ NotFoundView } />
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
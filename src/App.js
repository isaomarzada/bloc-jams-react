import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import './myapp.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/' id="l1">Home</Link>
            <Link to='/library' id="l2">Library</Link>
          </nav>
          <h1 id='title'>Bloc Jams</h1>
        </header>
        <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;

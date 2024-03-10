// Import other components and libraries
import './App.css';
import Registration from './components/Signup';
import Show from './components/Show';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Login from './components/Login';
import Book from './components/Book';
import Error from './components/Error';
import Gallery from './components/Gallery';
import Heritage from './components/Heritage';

function App({ store }) {
  function Page() {
    var d = { name: 'sai', course: 'mswd' };
    switch (store.getState().NavReducer) {
      case 'Login':
        return <Login store={store} />;
      case 'Registration':
        return <Registration />;
      case 'Show':
        if (localStorage.getItem('role') == 1) return <Show />;
        else return <Error />;
      case 'Book':
        if (
          localStorage.getItem('role') == 1 ||
          localStorage.getItem('role') == 2 ||
          localStorage.getItem('role') == 3
        )
          return <Book />;
        else return <Error />;
      case 'Gallery':
        return <Gallery />;
      case 'Heritage Sites':
        return <Heritage />;
      default:
        return <Error />;
    }
  }

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <p>Indian Culture Management System</p>
        </header>
        <div className="App-body">
          <Appbar store={store} />
          <Routes>
            {/* Add routes for different pages */}
            <Route path="/" element={<Page />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reduxtk/store';

import Home from './Views/Home/Home';
import MovieList from './Views/Movies/MovieList';
import MovieDetails from './Views/MovieDetails/MovieDetails';
import TVShows from './Views/TVShows/TVShows';
import NotFound from './Views/NotFound/NotFound';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import User from './Views/Movies/user';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/MoviesList' element={<MovieList />} />
        <Route path='/Movies/:id' element={<MovieDetails />} />
        <Route path='/TVShows' element={<TVShows />} />
        <Route path='/User' element={<User />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;

import './assets/fonts/material-icon/css/material-design-iconic-font.min.css'
import './assets/scss/style.scss'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

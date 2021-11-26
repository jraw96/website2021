import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import About from './pages/About/About';
import Books from './pages/Books/Books';
import Travel from './pages/Travel/Travel';
import Error from './pages/Error/Error';

import Navbar from './components/Navbar/Navbar';


ReactDOM.render (<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"
            element={<About/>}/>
        <Route path="/books"
            element={<Books/>}/>
        <Route path="/travel"
            element={<Travel/>}/>
        <Route path='*'
            element={<Error/>}/>
    </Routes>
</BrowserRouter>, document.getElementById('root'));

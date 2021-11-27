import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Travel from "./pages/Travel/Travel";
import Error from "./pages/Error/Error";

import "./App.scss";

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/books' element={<Books />} />
					<Route path='/travel' element={<Travel />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

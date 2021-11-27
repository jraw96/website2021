import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Travel from "./pages/Travel/Travel";
import Error from "./pages/Error/Error";

import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

const AnimatedSwitch = () => {
	const location = useLocation();

	return (
		<div
			className={`${
				location.pathname !== "/" ? "not-home" : ""
			} app-container `}
		>
			<TransitionGroup className='page'>
				<CSSTransition key={location.key} classNames='fade' timeout={200}>
					<Routes>
						<Route path='/' element={<Home />} key={location.key} />
						<Route path='/about' element={<About />} key={location.key} />
						<Route path='/books' element={<Books />} key={location.key} />
						<Route path='/travel' element={<Travel />} key={location.key} />
						<Route path='*' element={<Error />} key={location.key} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Navbar />
				<AnimatedSwitch />
			</BrowserRouter>
		</div>
	);
}

export default App;

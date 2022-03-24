import './assets/App.scss';
import Header from'./components/header/Header.jsx';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter
} from "react-router-dom";
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import MainBlock from './components/main/Main';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header></Header>
				<Routes>
					<Route exact path="/" element={<MainBlock/>}></Route>
					<Route exact path="aboutMe" element={<AboutMe/>}></Route>
					<Route exact path="catalog"></Route>
					<Route exact path="payment"></Route>
					<Route exact path="reviews"></Route>
					<Route path="*"
						element={
							<main style={{ padding: "1rem", textAlign: "center", fontSize: "3rem" }}>
								<h1>404</h1>
								<h3>Not found</h3>
							</main>
						}
					/>
				</Routes>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;

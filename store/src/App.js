import './assets/App.scss';
import Header from'./components/header/Header.jsx';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header></Header>
				<Routes>
					<Route exact path="/"></Route>
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
			</div>
		</BrowserRouter>
	);
}

export default App;

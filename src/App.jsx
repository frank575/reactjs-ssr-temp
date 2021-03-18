import { Link, Route, Switch } from 'react-router-dom'
import routes from '../routes.js'

function App() {
	return (
		<>
			{/*<nav>*/}
			{/*	<ul>*/}
			{/*		{routes.map(({ name, path }) => {*/}
			{/*			return (*/}
			{/*				<li key={path}>*/}
			{/*					<Link to={path}>{name}</Link>*/}
			{/*				</li>*/}
			{/*			)*/}
			{/*		})}*/}
			{/*	</ul>*/}
			{/*</nav>*/}
			<Switch>
				{routes.map(({ path, component: RouteComp }) => {
					return (
						<Route key={path} path={path} exact>
							<RouteComp />
						</Route>
					)
				})}
				<Route path="*">404</Route>
			</Switch>
		</>
	)
}

export default App

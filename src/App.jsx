import { Link, Route, Switch } from 'react-router-dom'
import About from '@/pages/About'
import Home from '@/pages/Home'

const routes = [
	{
		component: Home,
		name: 'Home',
		path: '/',
	},
	{
		component: About,
		name: 'About',
		path: '/about',
	},
]

export function App() {
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

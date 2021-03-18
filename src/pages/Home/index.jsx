import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const Home = () => {
	return (
		<div className={styles.root}>
			<div className={'logo'}>
				<img src="logo.svg" alt="" />
			</div>
			<div className={'title'}>L8ReactjsSSRTemplate</div>
			{/*<div className={'tip'}>*/}
			{/*	範例*/}
			{/*	<Link to={'/dash/example'}>*/}
			{/*		{' <'}點擊前往{'>'}*/}
			{/*	</Link>*/}
			{/*</div>*/}
		</div>
	)
}

export default Home

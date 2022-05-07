import React, { useState } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import { useEffect } from 'react'


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(()=>{
		const srtoredUserLoggedInfor= localStorage.getItem('isLoggedIn') //localStorage den kluch menen chakyryp atat
		if(srtoredUserLoggedInfor==='1'){//isLoggedIn   barby,bar bolso anda setIsLoggedIn true bolup tura beret,bizdin sluchiede Home komponenti ishtep tura beret,obnovlenie kylsa da ochup ketpeit,sebebi LocalStorage ke saltapaldyk
			setIsLoggedIn(true)
		}
	},[])
	


	const loginHandler = async (email, password) => {
		localStorage.setItem('isLoggedIn', '1')//bul jerde 1-true,kluch menen logindi local Starageke saktap jatabyz,

		//localStorage sideEffect bolso da egerde function ichine jazsa bolot  useEffectke orobosok da 

		// const result = await fetch('url', {
		// 	method: 'POST',
		// 	body: JSON.stringify({ email, password }),
		// 	'Content-Type': application / json,
		// })

		setIsLoggedIn(true)
	}

	const logoutHandler = () => { 
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	return (
		<React.Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />//dannyilar kirgizilse   bul component ishteit
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}//dannyilar jok bolso Login komponenti ishtep tursun
				{isLoggedIn && <Home onLogout={logoutHandler} />}//egerde isLoggedIn bar true bolso ,dannyilar bar bolso anda bul component chyksyn 
			
			</main>
		</React.Fragment>
	)
}

export default App

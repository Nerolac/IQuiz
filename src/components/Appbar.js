import React from 'react'
import Sidebar from './Sidebar'
import './Appbar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import firebase from '../firebase/firebase'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {ExitToApp} from '@material-ui/icons'
const Helper=({open})=>{
	const [signOut, setSignOut] = useState(false)
	// if (signOut) return <Redirect to='/' />
   if(open){
	return(
		
		<div className='nav-text sign-out'>
		<button
			onClick={() => {
				console.log('clicked')
				// setUser({})
				firebase.auth().signOut()
				setSignOut(true)
			}}
		>
			<Icon>
				<ExitToApp />
			</Icon>
			<span className='nav-item-title'>{'SignOut'}</span>
		</button>
	</div>)
   }
   else return (<>
   </>)
}
const Appbar = ({ user, setUser }) => {
	const [open, setOpen] = useState(false)
	return (
		<div className='appbar'>
			<div className='slider'>
				<Sidebar />
				<Link to='/' className='home'>
					<b>IQ</b>uiz
				</Link>
			</div>
			<div className='appbar-user'>
				<Icon>
					<AccountCircle onClick={()=>{
						 setOpen(!open);
					}} />
				</Icon>
				<p>{user.name}</p>
				<Helper open={open} />
			</div>
		</div>
	)
}

export default Appbar

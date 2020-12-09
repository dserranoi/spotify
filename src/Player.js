import React from 'react'
import './assets/styles/Player.css';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
function Player() {
    return (
        <div className='player'>
            <div className='player__body'>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player

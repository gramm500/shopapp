import React from "react";
import './homepage.styles.scss'
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <p className="subtitle">Buy please</p>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">Coats</h1>
                    <p className="subtitle">Buy please</p>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">Boots</h1>
                    <p className="subtitle">Buy please</p>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">For Women</h1>
                    <p className="subtitle">Buy please</p>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">For Men</h1>
                    <p className="subtitle">Buy please</p>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;
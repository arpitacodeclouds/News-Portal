import React, {Component} from 'react';
import  '../../assets/css/style.css'
import  '../../assets/font/font-awesome.min.css'
import  '../../assets/font/font.css'
import  '../../assets/css/bootstrap.min.css'
import  '../../assets/css/responsive.css'
import  '../../assets/css/jquery.bxslider.css'
import logo from '../../assets/images/logo.png'
import PropTypes from 'prop-types';

const Header = ({categorySearch,location}) => {
  
    return (
        <>
            <div className="header_area">
                <div className="logo floatleft"><img src={logo} alt="" /></div>
                <div className="top_menu floatleft"></div>
                <div className="floatright "><h3 class="location-data">{location}</h3></div>
            </div>
            <div className="main_menu_area">
                <ul id="nav">
                    <li onClick={() => categorySearch('')}><a href="/">Home</a></li>
                    <li onClick={() => categorySearch('world-news')}>world news</li>
                    <li onClick={() => categorySearch('sports')}>sports</li>
                    <li onClick={() => categorySearch('technology')}>tech</li>
                    <li onClick={() => categorySearch('business')}>business</li>
                    <li onClick={() => categorySearch('entertainment')}>entertainment</li>
                </ul>
            </div>
        </>      
    )
}

Header.propTypes = {
    location: PropTypes.string.isRequired,
    categorySearch: PropTypes.func.isRequired
};

export default Header;
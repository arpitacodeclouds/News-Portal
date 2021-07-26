import React, {Component} from 'react';
import  '../../assets/css/style.css'
import  '../../assets/font/font-awesome.min.css'
import  '../../assets/font/font.css'
import  '../../assets/css/bootstrap.min.css'
import  '../../assets/css/responsive.css'
import  '../../assets/css/jquery.bxslider.css'
import logo from '../../assets/images/logo.png'
import UserLocation from '../UserLocation/PointUserLocation';
// class Footer extends Component {
const Footer = () => {
    return (
        <>
            <div className="footer_top_area">
                <div className="inner_footer_top"> </div>
            </div>
            <div className="footer_bottom_area">
                <div className="footer_menu">
               
                </div>
                <div className="copyright_text">
                <p>Copyright &copy; 2045 The News Reporter Inc. All rights reserved | Design by <a target="_blank" rel="nofollow" href="http://www.graphicsfuel.com/2045/10/wp-magazine-theme-template-psd/">Rafi MD</a></p>
                <p>Trade marks and images used in the design are the copyright of their respective owners and are used for demo purposes only.</p>
                </div>
            </div>
        </>      
    )
}
export default Footer;
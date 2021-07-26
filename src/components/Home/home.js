import React, {Component} from 'react';
import UserLocation from '../UserLocation/PointUserLocation';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
    
    state = {
        category : '',
        country : ''
    }
    handleCallback = (childData) =>{
        this.setState({country:childData.country_name})
    }
    categoryList = (category) =>{
        this.setState({category:category})
    }
    render() {
       
        return (
            <div className="body_wrapper">
                <div className="center">
                    <Header categorySearch={this.categoryList} location={this.state.country}/>
                    <div className="slider_area">
                        <UserLocation parentCallback = {this.handleCallback} category = {this.state.category}></UserLocation>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home;
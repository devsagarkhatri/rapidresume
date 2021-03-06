import React, { Component } from 'react';
import "./rrPanel.css";
import "./themes.css";
import theme_image from './../resources/images/banner.png';
import theme_image1 from './../resources/images/banner1.png';
// import logo from './../resources/images/rrlogo.png'; 
class Themes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="tab-pane active " id="themes" role="tabpanel">   
                <h1 className="form-heading">
                    Choose a Theme
                </h1>    <br />
                

                <div className="card" role="button" aria-pressed="true" >
                    <div className="content">
                        <div className="front">
                            <img alt="" src={theme_image} style={{height:"auto",width:"100%"}}/>
                        </div>
                        
                        <button className="div_back_button back">Theme 1</button>
                        
                    </div>
                </div>

                <div className="card" role="button" aria-pressed="true" >
                    <div className="content">
                        <div className="front">
                            <img alt="" src={theme_image1} style={{height:"auto",width:"100%"}}/>
                        </div>
                        <button className="div_back_button back">Theme 2</button>
                    </div>
                </div>

                <div className="card" role="button" aria-pressed="true" >
                    <div className="content">
                        <div className="front">
                            <img alt="" src={theme_image} style={{height:"auto",width:"100%"}}/>
                        </div>
                        <button className="div_back_button back">Theme 3</button>
                    </div>
                </div>

                

            </div>
         );
    }
}
 
export default Themes;
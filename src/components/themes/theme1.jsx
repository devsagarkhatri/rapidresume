import React, { Component } from 'react';
import "./theme1.css";

class Theme1 extends Component {
    constructor(props) {
        super(props);
        this.state = {name:"DEFAULT NAME"  }
    }
    
    render() {
        
        if (this.props.name !== "" && this.props.name!==this.state.name) {
            this.setState({name : this.props.name});    
        }
        
        

        return (
            <React.Fragment>
                <h1 className="name">{this.state.name}</h1>
                <ul className="profile">
                    <li>dev.sagarkhatri@gmail.com</li>
                    <li>Phone Number</li>
                    <li>Linkedin Profile Link</li>
                    <li>Github Profile Link</li>
                </ul>
                
                <div className="heading">                    
                    Profile
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>

                
                <div className="heading">                    
                    Education
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>

                <div className="heading">                    
                    Skills
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>

                <div className="heading">                    
                    Work
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>

                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>
                
                <div className="heading">                    
                    Projects
                    <hr style={{ borderColor: "black" }} />    
                </div>
                <div className="heading-content row">
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                    <div className="col-sm-9">
                        hello
                    </div>
                    <div className="col-sm-3 content-right">
                        world
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Theme1;
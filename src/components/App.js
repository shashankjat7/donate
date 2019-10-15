import React from 'react';
import NavBar from "./NavBar";
import Services from "./Services";
import Vampire from "./Vampire";

class App extends React.Component{

    state={type:0}
    setType = (number) => {
        this.setState({type:number})
    }
    render() {
        if (this.state.type===0){
            return(
                <div>
                    <NavBar number={this.setType}/>
                    <div className="ui segment">
                        <Services type="Donate"
                                  tag2="Donate Blood"
                                  tag1="your life is worthless..........at least save someone else's"/>
                    </div>
                </div>


            )
        }
        if (this.state.type===1){
            return(
                <div>
                    <NavBar number={this.setType}/>
                    <div className="ui segment">
                        <Services type="Request"
                                  tag1="Request for some Blood"
                                  tag2="Contact Blood Banks"
                        />
                    </div>
                </div>


            )
        }
        if (this.state.type===2){
            return(
                <div>
                    <NavBar number={this.setType}/>
                    <div className="ui segment">
                        <Vampire type="Request"/>
                    </div>
                </div>


            )
        }
    }

}

export default App
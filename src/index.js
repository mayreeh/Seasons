import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    //not really required. Not react to react but to JJS
    constructor(props){
        super(props);
        this.state = { lat:null , errorMessage: ""};
   
    }

    state = {late:null , errorMessage: ""};
    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}) ,
            err =>  this.setState({errorMessage : err.message})
        );
    }

    renderContent(){
        if(this.state.lat && !this.state.errorMessage){
            return  <div> <SeasonDisplay lat = {this.state.lat}/> </div>;
        }
        if(!this.state.lat && this.state.errorMessage){
            return  <div> Error {this.state.errorMessage} </div>;
        }
        if(!this.state.lat && !this.state.errorMessage){
            return  <div> <Spinner message = "Please accept location request"/> </div>;
        }
    }
    //react says we have to define render
    render(){
     
        return (<div className="border red">
            {this.renderContent()}
        </div>)
     } 
}
ReactDOM.render(<App/> , document.querySelector('#root'));

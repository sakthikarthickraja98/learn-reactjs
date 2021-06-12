import React,{Component} from "react";
import Commenddetails from "./commenddetails";

export default class App extends Component{
    render(){
        return (
        <div className="ui container comments">
        <Commenddetails/>    
        </div>
        );
    }
}
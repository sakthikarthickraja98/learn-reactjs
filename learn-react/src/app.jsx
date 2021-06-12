import React,{Component} from "react";
import Commenddetails from "./commenddetails";

export default class App extends Component{
    render(){
        return (
        <div className="ui container comments">
        <Commenddetails author="Kadir" timeago="Today at 5:00PM"/>
        <Commenddetails author="Murugan" timeago="Today at 4:30PM"/>  
        <Commenddetails author="kandha" timeago="yesterday at 5:00PM"/>         
        </div>
        );
    }
}
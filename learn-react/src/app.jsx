import fake from "faker";
import React, { Component } from "react";
import Commenddetails from "./commenddetails";
import Approvalcard from "./approvalcard";

export default class App extends Component {
  render() {
    return (
      <div className="ui container comments">
          <Approvalcard/>
        <Commenddetails author="Kadir" timeago="Today at 5:00PM" content="Lovable content" image={fake.image.avatar()}/>
        <Commenddetails author="Murugan" timeago="Today at 4:30PM" content="I like this writing" image={fake.image.avatar()}/>
        <Commenddetails author="kandha" timeago="yesterday at 5:00PM" content="I like this subject" image={fake.image.avatar()}/>
      </div>
    );
  }
}

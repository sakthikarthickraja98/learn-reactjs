import fake from "faker";
import React, { Component } from "react";
import Commenddetails from "./commenddetails";
import Approvalcard from "./approvalcard";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="ui container comments">
        <Approvalcard>
            
            <h4>Warning!</h4>
            Are you sure you want to do this?
            
        </Approvalcard>
        <Approvalcard>
        <Commenddetails author="Kadir" timeago="Today at 5:00PM" content="Lovable content" image={fake.image.avatar()}/>
        </Approvalcard>

        <Approvalcard>
        <Commenddetails author="Murugan" timeago="Today at 4:30PM" content="I like this writing" image={fake.image.avatar()}/>
        </Approvalcard>

        <Approvalcard>
        <Commenddetails author="kandha" timeago="yesterday at 5:00PM" content="I like this subject" image={fake.image.avatar()}/>
        </Approvalcard>

      </div>
      </React.Fragment>
    );
  }
}

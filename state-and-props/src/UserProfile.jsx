import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Alex", mode: "view" }; // Added mode to state for toggling view/edit
    this.changeName = this.changeName.bind(this); // Bind the method to maintain 'this' context
    this.toggleMode = this.toggleMode.bind(this); // Bind toggleMode method
  }

  changeName() {
    this.setState({ name: "Charlie" }); // Correct way to update state
  }

  toggleMode() {
    this.setState((state) => ({
      mode: state.mode === "view" ? "edit" : "view",
    }));
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={this.changeName}>Change Name to Charlie</button>
        <button onClick={this.toggleMode}>
          Toggle to {this.state.mode === "view" ? "Edit" : "View"} Mode
        </button>
        {this.state.mode === "edit" && (
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;

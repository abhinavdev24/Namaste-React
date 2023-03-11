import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div className="my-5">
        <h1 className="font-bold text-xl">Profile Class Component</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <>
              <h2>
                <span className="font-semibold">Name:</span> {user.name}
              </h2>
              <h2>
                <span className="font-semibold">Email:</span> {user.email}
              </h2>
            </>
          )}
        </UserContext.Consumer>
        <h2>Count: {this.state.count}</h2>
        <button
          className="bg-blue-500 rounded p-1 text-white"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count + 1
        </button>
      </div>
    );
  }
}

export default Profile;

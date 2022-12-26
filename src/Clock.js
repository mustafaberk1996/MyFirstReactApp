// import React from "react";

// const Clock = (props) => {
//   return (
//     <div>
//       <p>{props.date.toLocaleTimeString()}</p>
//     </div>
//   );
// };

// export default Clock;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

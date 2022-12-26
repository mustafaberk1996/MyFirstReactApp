import { render } from "react-dom";

class User extends React.Component {
  render() {
    return (
      <div className="dv-user">
        <h1>hi this is user</h1>
        <p>hi this my bio</p>
      </div>
    );
  }
}

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

//render(<User />, document.getElementById("root2"));
//render(<Welcome name="MustafaBerk" />, document.getElementById("root2"));

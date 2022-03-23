import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from "react-bootstrap";

function App() {
  return (
    <div>

    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <Menu/>    
    <Button>alert</Button>
    <Button variant="primary">Primary</Button>{' '}
    <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>

    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Pizza from "./componentes/Pizza"
//import Home from "./componentes/Home";
//import  Cart from "./componentes/Cart"
//import Register from "./componentes/Register";
//import Login from "./componentes/Login"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  
  return (
    <>
      <Navbar/>
      {/* <Cart/> */}
      {/* <Home></Home> */}
      <Pizza/>
      {/* <Register></Register> */}
      {/* <Login/> */}
      <Footer/>
    </>
  );
}

export default App;

import Header from "./Header";
import CardPizza from "./CardPizza";
//import data from "../../pizzas.js";
import {useState, useEffect} from 'react';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  
  const addCarrito = (index)=>{        
    const producto = pizzas[index];
    const existe = carrito.some((p)=>{
      return p.id === producto.id
    })
    if(!existe){
      setCarrito(prev => [...prev, producto]);
      //setCarrito([...carrito, producto]);
      console.log(carrito);
    }    
  };

  useEffect( () => {
    const obtenerDatos = async () => {
      const respuesta = await fetch('http://localhost:5000/api/pizzas');
      const datos = await respuesta.json();
      setPizzas(datos);      
    };
    obtenerDatos();
  }, []);


  return (
      <>        
        <Header/>
        <div className="cards">
          {pizzas.map((item, index)=>(
            <CardPizza key={index} pizza={item} addCarrito={addCarrito} index={index}></CardPizza>
            ))}
        </div>
      </>
    )
  
};

export default Home;

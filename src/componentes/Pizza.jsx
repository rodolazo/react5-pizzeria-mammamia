import { useState, useEffect } from "react";

const Pizza = () => {	

	//Estados de la pizza
	const [pizza, setPizza] = useState({});	
	const [precioFormateado, setPrecioFormateado] = useState("");
	

	useEffect( () => {

    const obtenerDatos = async () => {
      const respuesta = await fetch('http://localhost:5000/api/pizzas/p001');
      const objetoPizza = await respuesta.json();
      setPizza(objetoPizza);      
    };

    obtenerDatos();

  }, []);

	//De esta manera me aseguro que ya tengo el valor de price
	useEffect(() => {
		if (pizza.price !== undefined) {
			const precio = pizza.price
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    		setPrecioFormateado(precio);
    	}
    }, [pizza]);


  return (
  <>
    {pizza.name ? (
    	<div className="cardpizza pizza">
	        <img src={pizza.img} alt={pizza.name} className="cardpizza__img" />
	        <h2 className="cardpizza__title">{`Pizza ${pizza.name}`}</h2>
	        <p className="cardpizza__texto">Ingredientes: </p>
	        <p className="cardpizza__ingredientes">{pizza.ingredients.join(", ")}</p>
	        <p className="cardpizza__precio">{`Precio: $ ${precioFormateado}`}</p>
	        <div className="cardpizza__botones">
	        	<button className="cardpizza__boton">Ver más</button>
	        	<button className="cardpizza__boton cardpizza__boton_comprar">
	        		Añadir
	        	</button>
	        </div>
        </div>
        ) : (
      	<p>Cargando pizza...</p>
    		)}
  </>
  );

};

export default Pizza;
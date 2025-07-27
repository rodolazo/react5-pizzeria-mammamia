import { useState } from "react";
import pizzaCart from "../../pizzas.js";
import { Button } from 'react-bootstrap';

const Cart = () => {

	const [cart, setCart] = useState(pizzaCart);
	const [cantidades, setCantidades] = useState(Array(pizzaCart.length).fill(1));

	const handleInputCantidad = (e, index) => {
		const valor = parseInt(e.target.value) || 0;
		const nuevasCantidades = [...cantidades];
		const nuevoCart = [...cart];

		if (valor <= 0) {
			nuevasCantidades.splice(index, 1);
			nuevoCart.splice(index, 1);
		} else {
			nuevasCantidades[index] = valor;
		}
		setCantidades(nuevasCantidades);
		setCart(nuevoCart);
	};
	

	const handleCantidad = (e,index, accion)=>{
		e.preventDefault();
		const nuevoCart = [...cart];
		const nuevasCantidades = [...cantidades];		
		

		switch (accion){
			case "sumar":
				nuevasCantidades[index] += 1;				
				break;
			case "restar":
				nuevasCantidades[index] -= 1;				
				if (nuevasCantidades[index] <= 0) {
					nuevasCantidades.splice(index, 1);
					nuevoCart.splice(index, 1);
					}				
				break;
			case "eliminar":
				nuevasCantidades.splice(index, 1);				
				nuevoCart.splice(index, 1);
				break;
			default:
				break;
		}
		setCantidades(nuevasCantidades);		
		setCart(nuevoCart);
		
	}

	const total = cart.reduce((acc, item, index) => {
	  return acc + item.price * cantidades[index];
	}, 0);

	const finalizarCompra = ()=>{
		alert(`El total de la compra es de: ${total}`)	
	}


  return (
    <>    	
	<section className="cart">
	  <h2 className="cart__titulo">Tu Carrito</h2>

	  
	  <ul className="cart__lista">
	  { cart.map((item,index)=>(
	  		<li className="cart__elemento" key={index}>
	    	<img src={item.img}
	    		 className="cart__imagen"
	    		 alt={item.name}/>
	    	<div className="cart__details">
	    		<h3 className="cart__nombre">Pizza {item.name}</h3>
	    		<p className="cart__precio">Precio: {item.price}</p>
	    	</div>
	    	<div>
	    		<label className="cart__label">Cantidad: </label>
	    		<input className="cart__input cart__input_cantidad" type="number" onChange={(e) => handleInputCantidad(e, index)} value={cantidades[index]} min="0"/>
	    	</div>	    	
	        <div className="cart__botones">
	        	<Button className="cart__boton btn-secondary card__mas" onClick={(e)=>handleCantidad(e, index, "sumar")}>+</Button>
	        	<Button className="cart__boton btn-secondary card__menos" onClick={(e)=>handleCantidad(e, index, "restar")}>-</Button>
	        	<Button className="cart__boton btn-secondary card__eliminar" onClick={(e)=>handleCantidad(e, index, "eliminar")}>Eliminar</Button>
	        </div>
	        <div>
	    		<label className="cart__label">Precio: </label>
	    		<input readOnly className="cart__input cart__input_precio" type="number" value={(item.price * cantidades[index]).toFixed(2)} min="0"/>
	    	</div>	      
	    </li>
	  	))}
	  	
	    
	  </ul>

	  
	  <div className="cart__resumen">
	    <p>Total: <span id="total">€{total.toFixed(2)}</span></p>
	    <Button id="comprar" className="btn-dark" onClick={finalizarCompra}>Finalizar compra</Button>
	  </div>
	</section>      
    </>
  );
};

export default Cart;
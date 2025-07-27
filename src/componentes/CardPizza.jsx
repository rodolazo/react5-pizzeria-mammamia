import { propTypes } from "react-bootstrap/esm/Image";

const CardPizza = ({pizza :{desc, id, img, ingredients, name, price}, addCarrito, index}) => {
  const precioFormateado = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");  
  return (
    <>
      <div className="cardpizza">
        <img src={img} alt={desc} className="cardpizza__img" />
        <h2 className="cardpizza__title">{`Pizza ${name}`}</h2>
        <p className="cardpizza__texto cardpizza__ingredientes">Ingredientes: </p>
        <ul className="cardpizza__lista">
        {ingredients.map((ingrediente, idx) => (
          <li className="cardpizza__ing" key={idx}>{ingrediente}</li>
          ))}
        </ul>
        <p className="cardpizza__precio">Precio: {`$ ${precioFormateado}`}</p>
        <div className="cardpizza__botones">
          <button className="cardpizza__boton">Ver más</button>
          <button className="cardpizza__boton cardpizza__boton_comprar" onClick={()=>addCarrito(index,id)}>
            Añadir
          </button>
        </div>
      </div>
    </>
  );
};

CardPizza.propTypes = {
  pizza :{
    desc : propTypes.string,
    id: propTypes.string,
    img: propTypes.string,
    ingredients: propTypes.object,
    name: propTypes.string,
    price: propTypes.number
  },
  addCarrito: propTypes.func,
  index: propTypes.number
}

export default CardPizza;

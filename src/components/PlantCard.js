import React from "react";

function PlantCard({plant, toggleInStock, inStock}) {

  const { id, name, image, price} = plant
  

  const handleClick = () => {
    toggleInStock()
  }

  return (
    <li id={plant.id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button 
          onClick={handleClick}
          className="primary"
        >{inStock ? 'In Stock' : 'Out of Stock'}</button>
      ) : (
        <button
          onClick={handleClick}
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

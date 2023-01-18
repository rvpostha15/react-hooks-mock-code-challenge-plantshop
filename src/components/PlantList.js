import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, toggleInStock, inStock}) {

  const plant = plants.map(plant=> (
    <PlantCard
      key={plant.id}
      plant={plant}
      toggleInStock={toggleInStock}
      inStock={inStock}
    />
  ))



  return (
    <ul className="cards">{plant}</ul>
  );
}

export default PlantList;

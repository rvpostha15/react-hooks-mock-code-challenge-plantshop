import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, url, adjustPrice}) {

  const plant = plants.map(plant=> (
    <PlantCard
      adjustPrice={adjustPrice}
      url={url}
      key={plant.id}
      plant={plant}
      // toggleInStock={toggleInStock}
      // inStock={inStock}
    />
  ))



  return (
    <ul className="cards">{plant}</ul>
  );
}

export default PlantList;

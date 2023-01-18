import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// DONE: When the app starts, I can see all plants.
// DONE: I can add a new plant to the page by submitting the form.
// DONE: I can mark a plant as "sold out".
// DONE: I can search for plants by their name and see a filtered list of plants.

function PlantPage() {

  const url = "http://localhost:6001/plants"

  const [plants, setPlants]=useState([])
  const [inStock, setInStock] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  // Initial Fetch plantsArray
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(plants=>setPlants(plants))
  },[])
  
  const addNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  const toggleInStock = () => {
    setInStock(!inStock)
  }

  const plantSearch = plants.filter(plant => (
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))
  

  return (
    <main>
      <NewPlantForm
        url={url} 
        addNewPlant={addNewPlant}
      />
      <Search 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <PlantList 
        plants={plantSearch}
        toggleInStock={toggleInStock}
        inStock={inStock}
      />
    </main>
  );
}

export default PlantPage;

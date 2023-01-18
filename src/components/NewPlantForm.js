import React, {useState} from "react";

function NewPlantForm({addNewPlant, url}) {
// 1. Create State 2. Derive value from input 3. onChange
  const initialFormData = {
    name: '',
    image: '',
    price: '',
  }

  const [formData, setFormData]=useState(initialFormData)

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
    }
    const configObj = {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    }
    //Fetch POST
    fetch(url, configObj)
    .then(response =>response.json())
    .then(addNewPlant)
    
    setFormData(initialFormData)
  }

  return (
    <div onSubmit={handleSubmit} className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          onChange={handleChange}
          value={formData.name} 
          type="text" 
          name="name" 
          placeholder="Plant name" 
        />
        <input
          onChange={handleChange}
          value={formData.image} 
          type="text" 
          name="image" 
          placeholder="Image URL" 
        />
        <input 
          onChange={handleChange}
          value={formData.price}
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
        />
        <button 
          type="submit"
        >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

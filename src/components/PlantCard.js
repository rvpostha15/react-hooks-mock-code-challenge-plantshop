import React, {useState} from "react";

function PlantCard({plant, url, adjustPrice}) {
  const { id, name, image, price} = plant

  const [inStock, setInStock] = useState(true)
  const [plantPrice, setPlantPrice]= useState('Edit Price')
  const [editPriceForm, setEditPriceForm] = useState(false)
  
  
  const handleClick = () => {
    setInStock(inStock=>!inStock)
  }


  const editPrice = () => {
    setEditPriceForm(editPriceForm=>!editPriceForm)
  }
  
  const handleChange = (e) => {
    setPlantPrice(e.target.value)
  }
  // console.log(plantPrice)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedPrice = {...plant,
      price: plantPrice
    }
   
    const configObj = {
      method: 'PATCH',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPrice)
    }
    //Fetch PATCH
    fetch(`${url}/${id}`, configObj)
    .then(response =>response.json())
    .then(()=>adjustPrice(updatedPrice))
    setPlantPrice('Edit Price')
    
    setEditPriceForm(editPriceForm => !editPriceForm)
  }

  return (
    <li id={plant.id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}
        <button
          onClick={editPrice}
        >Edit Price
        </button>
      </p>
      {editPriceForm?
        <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={plantPrice}
              step="0.1"
              type="number"
              name="price"
              placeholder=""
            ></input>
        </form>
        : null
      } 
      
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

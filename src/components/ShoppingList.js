import { plantList } from '../datas/plantList'

function ShoppingList() {
	let plantCategories = [];
  
  plantList.forEach((plant)=>{
    let plantCategory = plant.category;
    if(!plantCategories.includes(plantCategory)){
      plantCategories.push(plantCategory);
    }
  })

  let beginKeyCategory = "plant-category";
  let beginKeyPlant = "plant-name";
  return (
  <div> 
    <ul>
      {
        plantCategories.map((plantCategory,index)=>{
          return <li key={beginKeyCategory+index}>{plantCategory}</li>
        })
      }
    </ul>
    <ul>
    {
      plantList.map((plantObject)=>{
        return <li key={beginKeyPlant+plantObject.id}>{plantObject.name}</li>
      })
    }
    </ul>
  </div>
  )
}

export default ShoppingList
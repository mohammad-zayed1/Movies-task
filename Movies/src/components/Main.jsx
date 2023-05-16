import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";



export const Main = () => {

  const [data, setData] = useState([]);
  const [search , setSearch] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies"); // Replace with your Express.js API endpoint
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

const handleSubmit = (event)=>{
  event.preventDefault();
  console.log('clicked')
}
  const handleChange = (event)=>{
     const {value} = event.target;
     setSearch(value)
  }
  const cards = data.filter((card)=>{
    const title = card.title.toLowerCase()
    return title.includes(search.toLowerCase())
  }).map((card)=>{
   return   <Card key = {card.id} title={card.title} rank ={card.rank} image ={card.image[0][1]}  link={card.thumbnail}/>
    
  })
  return(
    <div className="flex flex-col bg-white mt-5 pt-4">
     <form action="#" onSubmit={handleSubmit} className="flex justify-center items-center">
      <input className="input mx-1" placeholder="type here" type="text" name="search" value={search} onChange={handleChange}/>
      <button  className="btn btn-primary">Search</button>
     </form>
     <div className="p-6 flex flex-wrap gap-3  justify-center items-center" style={{ "flex-grow": "10" }}>
    
    {cards}
  </div>
    </div>
  )
  
 
};

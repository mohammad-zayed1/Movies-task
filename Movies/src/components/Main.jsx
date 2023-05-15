import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";



export const Main = () => {

  const [data, setData] = useState([]);
  const [form , setForm] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/anime"); // Replace with your Express.js API endpoint
        setData(response.data.data);
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
     setForm(value)
  }
console.log(form)
  const cards = data.map((card)=>{
   return   <Card key = {card.id} title={card.title} rank ={card.title} image ={card.image}  link={card.link}/>
    
  })
  return <div className="p-6 flex flex-wrap gap-3 bg-white justify-center items-center" style={{ "flex-grow": "10" }}>
     <form action="#" onSubmit={handleSubmit}>
      <input className="input mx-1" placeholder="type here" type="text" name="search" value={form.search} onChange={handleChange}/>
      <button  className="btn btn-primary">Search</button>
     </form>
    {cards}
  </div>;
};

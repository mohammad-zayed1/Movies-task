import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";



export const Main = () => {

  const [data, setData] = useState([]);

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

//   console.log(data);

  const cards = data.map((card)=>{
   return   <Card key = {card.id} title={card.title} rank ={card.title} image ={card.image}  link={card.link}/>
    
  })
  return <div className="p-6 flex flex-wrap gap-3 bg-white justify-center items-center" style={{ "flex-grow": "10" }}>
    {cards}
  </div>;
};

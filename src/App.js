import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Carddata from "./data"

var cards = Carddata.map(item =>
 <Card key = {item.id} item = {item}/>
);
export default function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">
                {cards}
        </section>
    </div>
  );
}
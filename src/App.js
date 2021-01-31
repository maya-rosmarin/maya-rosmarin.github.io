import React from 'react'

import './App.css'

const recipes = [
     {
      name: "Sea Bass Ceviche with Tempura Onions",
      image: "sea_bass_ceviche",
      date: "January 30th, 2021"
     },
     {
      name: "Chile de Agua Stuffed with Tuna Ceviche, Seared Tuna with Guajillo and Dried Shrimp Mole, Kalamata Puree ",
      image: "stuffed_chile",
      date: ""
     },
     {
      name: "Sea Bass with New Mexican Pepper Adobo and Pineapple Puree",
      image: "sea_bass_al_pastor",
      date: ""
     },
     {
      name: "Chicken Marbella - Silver Palate Cookbook",
      image: "chicken_marbella",
      date: "January 4th, 2021"
    },
    {
      name: "Beef Stew with Cumin Seed - Silver Palate Cookbook",
      image: "beef_stew",
      date: "January 3rd, 2021"
    }
];

class App extends React.Component {
    render() {
        return (
            <div>
              <header>Matt and Maya Cook</header>
              {recipes.map(recipe => (
                <div>
                  <br />
                  <date>{recipe.date}</date>
                  <br />
                  <name>{recipe.name}</name>
                  <br />
                  <img src={`${process.env.PUBLIC_URL}/assets/images/${recipe.image}.jpg`} />
                  <br />
                </div>
              ))}
            </div>
        );
    }
}

export default App

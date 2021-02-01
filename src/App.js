import React from 'react'

import './App.css'

const meals = [
  {
    date: "January 30th, 2021",
    courses: [
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
    ],
  },
  {
    date: "December 15th, 2020",
    courses: [
      {
      name: "White Truffle Tajarin",
      image: "white_truffle_tajarin",
      date: "December 15th, 2020"
      },
    ]
  },
  {
    date: "December 13th, 2020",
    courses: [
      {
      name: "Mushroom Croquette with Shiitake Mushroom Cap, \"Watercress Turf\", Watercress Puree, Edible Flowers",
      image: "mushroom_croquette",
      date: "December 13th, 2020"
     },
     {
      name: "Caramelized Artichoke Hearts, Sunchoke and Artichoke Puree, Creme Artichaut, \"Artichoke Essence\", Baby Greens",
      image: "caramelized_artichoke_hearts",
      date: ""
     },
     {
      name: "Sea Bream with \"Potato Scales\", Fried Capers, Candied Meyer Lemon Slices and Peel, Roasted Caper Cream, and Parley",
      image: "sea_bream_with_potato",
      date: ""
     },
     {
      name: "Chocolate Cinnamon Veloute with Chocolate Sauce, Cinnamon Stick Ice Cream, Cinnamon Cookie",
      image: "chocolate_veloute",
      date: ""
     },
    ]
  },
  {
    date: "November 15th, 2020",
    courses: [
     {
      name: "Salmon Tartare Cornets with Shallot Creme Fraiche and Chives",
      image: "salmon_cornets",
      date: "November 15th, 2020"
     },
     {
      name: "Gazpacho with Balsamic Glaze",
      image: "gazpacho",
      date: ""
     },
     {
      name: "Smoked Salmon with Gnocchi, Radicchio, Chive Oil, Balsamic Glaze",
      image: "smoked_salmon_gnocchi",
      date: ""
     },
     {
      name: "\"Ille Flottante\" - Meringue Filled with Chocolate Mousse, Chocolate Shavings, Mint Oil",
      image: "ille_flottante",
      date: ""
     },
    ]
  },
  {
     date: "November 1st, 2020",
     courses: [
       {
        name: "Beef Wellington",
        image: "beef_wellington",
        date: "November 1st, 2020"
       },
     ],
  }
];

function Meal(props) {
   return (
     <div>
          {props.courses.map(recipe => (
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
   ) 
}

function App() {
    return (
        <div className="body">
          <header>Matt and Maya Cook</header>
          {meals.map(courses => (
            <div>
                <Meal courses={courses}/>
            </div>
          ))}
        </div>
    );
}

export default App

import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Divider from '@material-ui/core/Divider';

import './App.css'

const meals = [
  {
    date: "January 30th, 2021",
    courses: [
        {
          name: "Sea Bass Ceviche with Tempura Onions",
          image: "sea_bass_ceviche",
         },
         {
          name: "Chile de Agua Stuffed with Tuna Ceviche, Seared Tuna with Guajillo and Dried Shrimp Mole, Kalamata Puree ",
          image: "stuffed_chile",
         },
         {
          name: "Sea Bass with New Mexican Pepper Adobo and Pineapple Puree",
          image: "sea_bass_al_pastor",
         },
    ],
  },
  {
    date: "December 15th, 2020",
    courses: [
      {
      name: "White Truffle Tajarin",
      image: "white_truffle_tajarin",
      },
    ]
  },
  {
    date: "December 13th, 2020",
    courses: [
      {
      name: "Mushroom Croquette with Shiitake Mushroom Cap, \"Watercress Turf\", Watercress Puree, Edible Flowers",
      image: "mushroom_croquette",
     },
     {
      name: "Caramelized Artichoke Hearts, Sunchoke and Artichoke Puree, Creme Artichaut, \"Artichoke Essence\", Baby Greens",
      image: "caramelized_artichoke_hearts",
     },
     {
      name: "Sea Bream with \"Potato Scales\", Fried Capers, Candied Meyer Lemon Slices and Peel, Roasted Caper Cream, and Parley",
      image: "sea_bream_with_potato",
     },
     {
      name: "Chocolate Cinnamon Veloute with Chocolate Sauce, Cinnamon Stick Ice Cream, Cinnamon Cookie",
      image: "chocolate_veloute",
     },
    ]
  },
  {
    date: "November 15th, 2020",
    courses: [
     {
      name: "Salmon Tartare Cornets with Shallot Creme Fraiche and Chives",
      image: "salmon_cornets",
     },
     {
      name: "Gazpacho with Balsamic Glaze",
      image: "gazpacho",
     },
     {
      name: "Smoked Salmon with Gnocchi, Radicchio, Chive Oil, Balsamic Glaze",
      image: "smoked_salmon_gnocchi",
     },
     {
      name: "\"Ille Flottante\" - Meringue Filled with Chocolate Mousse, Chocolate Shavings, Mint Oil",
      image: "ille_flottante",
     },
    ]
  },
  {
     date: "November 1st, 2020",
     courses: [
       {
        name: "Beef Wellington",
        image: "beef_wellington",
       },
     ],
  },
  {
    date: "October 11th, 2020",
    courses: [
        {
            name: "Duck Fat Roasted Carrots with Carrot Puree, Date Puree, Carrot Duck Crumble, Wheat Berries, Pickled Dates, and Carrot Sauce",
            image: "carrot_on_carrot_on_carrot",
        },
        {
            name: "Branzino, Roasted Figs, Port-Soaked Dried Figs, Roasted Shiitake, Sweet Potato Puree, Serrano Ham, and Spinach",
            image: "branzino_roasted_figs",
        },
        {
            name: "Chocolate-Tahini Feuilletine, Chocolate Sesame Mousse, Black Sesame Paste, Yuzu Pate de Fruit, Brulee Banana, and Roasted Banana Sorbet",
            image: "banana_sesame_tahini",
        },
    ],
  },
  {
    date: "October 4th, 2020",
    courses: [
        {
            name: "Lavender Duck with Roasted Carrots and Sumac Cream and Pickled Daikon",
            image: "lavender_duck_carrots",
        },
    ],
  },
  {
    date: "November 26th, 2019",
    courses: [
         {
          name: "Artichokes Barigoule",
          image: "artichokes_barigoule",
         },
         {
          name: "Roulade of Pekin Duck Breast with Creamed Sweet White Corn and Morel Mushroom Sauce",
          image: "duck_morel",
         },
         {
          name: "Rhubarb Confit with Navel Oranges, Candied Fennel, and Mascarpone Sorbet",
          image: "rhubarb_confit",
         }
    ],
  },
];

function Meal(props) {
   return (
     <div>
         {props.courses.map(course=> (
            <div>
              <br />
              <name>{course.name}</name>
              <br />
              <img src={`${process.env.PUBLIC_URL}/assets/images/${course.image}.jpg`} />
            </div>
          ))}
     <br />
     <Divider variant="middle" />
     </div> 
   ) 
}

function App() {
    return (
        <div className="body">
          <header>Matt and Maya Cook</header>
            {meals.map(meal => (
            <div>
            <date>{meal.date}</date>
            <Meal courses={meal.courses} />
            </div>
          ))}
        </div>
    );
}

export default App

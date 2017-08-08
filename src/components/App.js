import React, { Component } from 'react';
import Row from './row';
import AddRecipe from './add_recipe';


// localStorage.clear("recipeBook");
// recipes holds all the users data
let recipes = (typeof localStorage["recipeBook"] != "undefined") ? JSON.parse(localStorage["recipeBook"]) : [
  {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]},
  {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
];

class App extends Component {
  render() {
    return (
      <div className="App container well">
        <Row recipes={recipes}/>
        <AddRecipe />
      </div>
    );
  }
}

export default App;

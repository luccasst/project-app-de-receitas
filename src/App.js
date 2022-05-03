import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import RecipeFoodInProcess from './pages/RecipeFoodInProgress';
import RecipeDrinksInProcess from './pages/RecipeDrinkInProgress';
import DetailFood from './pages/DetailFood';
import DetailDrink from './pages/DetailDrink';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreDrinkIngredients from './pages/ExploreDrinkIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipe from './pages/FavoriteRecipes';
import SearchProvider from './Context/SearchProvider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods/" component={ Foods } />
        <Route exact path="/drinks/" component={ Drinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipe } />
        <Route exact path="/foods/:id/" component={ DetailFood } />
        <Route path="/foods/:id/in-progress" component={ RecipeFoodInProcess } />
        <Route exact path="/drinks/:id/" component={ DetailDrink } />
        <Route path="/drinks/:id/in-progress" component={ RecipeDrinksInProcess } />
        <Route exact path="/explore/" component={ Explore } />
        <Route exact path="/explore/foods/" component={ ExploreFoods } />
        <Route path="/explore/foods/ingredients" component={ ExploreFoodIngredients } />
        <Route exact path="/explore/drinks/" component={ ExploreDrinks } />
        <Route path="/explore/drinks/ingredients" component={ ExploreDrinkIngredients } />
        <Route path="/explore/foods/nationalities" component={ ExploreNationalities } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;

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
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipe from './pages/FavoriteRecipes';
import SearchProvider from './Context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods/" component={ Foods } />
          <Route exact path="/drinks/" component={ Drinks } />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipe } />
          <Route path="/foods/:id/in-progress" component={ RecipeFoodInProcess } />
          <Route path="/foods/:id/" component={ DetailFood } />
          <Route path="/drinks/:id/in-progress" component={ RecipeDrinksInProcess } />
          <Route path="/drinks/:id/" component={ DetailDrink } />
          <Route exact path="/explore/" component={ Explore } />
          <Route path="/explore/foods/ingredients" component={ ExploreIngredients } />
          <Route path="/explore/foods/nationalities" component={ ExploreNationalities } />
          <Route path="/explore/foods/" component={ ExploreFoods } />
          <Route path="/explore/drinks/ingredients" component={ ExploreIngredients } />
          <Route path="/explore/drinks/" component={ ExploreDrinks } />
        </Switch>
      </BrowserRouter>
    </SearchProvider>
  );
}
export default App;

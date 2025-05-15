import { getRecipeCard  } from "./getRecipeCard";


const cardParentContainer = document.querySelector(".main");

const URL = "https://rapidapi.com/spoonacular/api/recipe-food-nutrition";

const createElement = (element) => document.createElement(element);

const getRecipes = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const recipes = await getRecipes(URL);
console.log(recipes);
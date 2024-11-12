import axios from "axios";

// Base URL
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Axios instance
const mealdbApi = axios.create({ 
    baseURL: BASE_URL 
});

// Get Random Meal
export const getRandomMeal = async () => {
  try {
    const resp = await mealdbApi.get("/random.php");
    return resp.data.meals;

  } catch (error) {
    console.log('Error fetching random meal:', error );
    throw error;
  }
};

// Get Meal by Id
export const getMealById = async ( id ) => {
    try {
        const resp = await mealdbApi.get(`/lookup.php?i=${id}`);
        return resp.data.meals[0];

    } catch (error) {
        console.log('Error fetching meal by id', error);
        throw error;
    }
}



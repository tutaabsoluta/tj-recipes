import axios from "axios";

// Base URL
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Axios instance
const mealdbApi = axios.create({ 
    baseURL: BASE_URL 
});

// Cache con localStorage
const cache = {
  timeout: 5 * 60 * 1000, // 5 minutos

  get: (key) => {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const { data, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp < cache.timeout) {
      return data;
    }
    
    // Si expiró, eliminar del localStorage
    localStorage.removeItem(key);
    return null;
  },

  set: (key, data) => {
    const item = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
};

// Get Random Meal
export const getRandomMeal = async () => {
  const cacheKey = 'random-meal';
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  try {
    const resp = await mealdbApi.get("/random.php");
    const data = resp.data.meals;
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.log('Error fetching random meal:', error);
    throw error;
  }
};

// Get Meal by Id
export const getMealById = async (id) => {
  const cacheKey = `meal-${id}`;
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  try {
    const resp = await mealdbApi.get(`/lookup.php?i=${id}`);
    const data = resp.data.meals[0];
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.log('Error fetching meal by id:', error);
    throw error;
  }
};




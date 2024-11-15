import { useEffect, useState } from "react";
import { getMealById } from "../api/mealdbApi";
import { MealCard } from "./MealCard";

export const MainPlates = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {

    const fetchMeals = async () => {
      try {
        // recipe id's
        const mealIds = [52772, 52773, 52774, 52775];
        const mealPromises = mealIds.map(id => getMealById(id));
        const mealData = await Promise.all(mealPromises);
        setMeals(mealData);

      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <main
      className="container mx-auto mt-[-60px]"
    >
      <p className="text-warmOrange uppercase text-sm font-light tracking-wide">
        Falling for something
      </p>
      <h2 className="tracking-wide font-light">
        Our main dishes of the moment️
      </h2>

      <div className="grid grid-cols-4 place-items-center mt-4">
        {meals.map((meal, index) => (
          <MealCard 
            key={index}
            title={meal.strMeal}
            src={meal.strMealThumb}
            area={meal.strArea}
            category={meal.strCategory}
          />
        ))}
      </div>
    </main>
  );
};



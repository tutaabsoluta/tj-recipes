import { MealCard } from "./MealCard";
import { useMealStore } from "../store/store";

export const MealList = () => {
  const recipes = useMealStore((state) => state.recipes); // Obtener todas las recetas del store

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <MealCard
          key={recipe.idMeal} // Siempre usa un `key` único
          id={recipe.idMeal}
          src={recipe.strMealThumb}
          title={recipe.strMeal}
          area={recipe.strArea}
          category={recipe.strCategory}
        />
      ))}
    </div>
  );
};

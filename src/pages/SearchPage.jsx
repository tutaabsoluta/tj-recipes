import { getMealByName } from "../api/mealdbApi";
import { useForm } from "../hooks/useForm";
import { MealCard } from "../components/MealCard";
import { useMealStore } from "../store/store";

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm();
  const setRecipes = useMealStore( (state) => state.setRecipes );
  const recipes = useMealStore( (state) => state.recipes );

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      setRecipes(await getMealByName(searchText));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container mx-auto">
      <form onSubmit={onSearch}>
        <div className="container mx-auto flex items-center justify-center mt-36">
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onInputChange }
          />
        </div>
      </form>

      <div
        className="grid grid-cols-4 gap-6 place-items-center"
      >
        {recipes ? (
          recipes.map((meal) => (
            <MealCard
              id={ meal.idMeal }
              meal={ meal } 
            />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </main>
  );
};

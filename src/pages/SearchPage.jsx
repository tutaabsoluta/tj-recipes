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
    <main className="container mx-auto px-4">
      <form onSubmit={onSearch}>
        <div className="container mx-auto flex flex-col items-center justify-center mt-20 mb-12">
          <h1 className="text-4xl font-bold mb-8 text-warmOrange mt-12">Search a recipe</h1>
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              placeholder="Search a recipe..."
              className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:border-warmOrange focus:outline-none shadow-sm text-lg"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {recipes ? (
          recipes.map((meal) => (
            <MealCard
              key={meal.idMeal}
              id={meal.idMeal}
              meal={meal}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <p className="text-gray-500 text-xl mb-2">No recipes found</p>
            <p className="text-gray-400">Try searching for something else.</p>
          </div>
        )}
      </div>
    </main>
  );
};

import { useState } from "react";
import { getMealByName } from "../api/mealdbApi";
import { useForm } from "../hooks/useForm";
import { MealCard } from "../components/MealCard";

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm();
  const [data, setData] = useState([]);

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      setData(await getMealByName(searchText));
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
            value={searchText}
            onChange={onInputChange}
          />
        </div>
      </form>

      <div className="grid grid-cols-4 gap-6">
        {data.map((meal) => (
          <MealCard
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

import { MdPublic, MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMealStore } from "../store/store";

export const MealCard = ({ id, meal }) => {
  const getRecipeById = useMealStore((state) => state.getRecipeById);
  const navigate = useNavigate();

  const onRecipe = () => {
    getRecipeById(id); // Usar el ID específico de esta receta
    navigate("/recipe");
  };

  return (
    <div
      className="bento-main w-[310px] h-[381px] flex flex-col items-center justify-center cursor-pointer"
      onClick={onRecipe}
    >
      <div>
        <img
          src={ meal.strMealThumb } // Imagen individual pasada como prop
          className="w-[203px] h-[205px] rounded-xl shadow-xl"
          alt={ meal.strMeal }
        />
      </div>

      <div>
        <p className="tracking-wider text-xl mt-8 text-center">{ meal.strMeal }</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <p className="flex items-center gap-1 text-[14px] text-lightGray">
            <MdPublic color="FDBD84" />
            { meal.strArea }
          </p>
          
          <p className="flex items-center gap-2 text-[14px] text-lightGray">
            <MdFastfood color="FDBD84" />
            { meal.strCategory }
          </p>
        </div>
      </div>
    </div>
  );
};

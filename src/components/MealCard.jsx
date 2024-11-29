import { MdPublic, MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMealStore } from "../store/store";

export const MealCard = ({ id, meal }) => {
  const getRecipeById = useMealStore((state) => state.getRecipeById);
  const navigate = useNavigate();

  const onRecipe = () => {
    getRecipeById(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/recipe");
  };

  return (
    <div
      className="bento-main md:min-w-72 2xl:min-w-80 md:min-h-96 flex flex-col items-center justify-center cursor-pointer 
      hover:scale-105 transition-all duration-300 
      bg-white/5 backdrop-blur-sm 
      rounded-2xl p-4 
      hover:shadow-[0_0_20px_rgba(253,189,132,0.15)] 
      border border-white/10"
      onClick={onRecipe}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={meal.strMealThumb}
          className="w-[203px] h-[205px] rounded-xl shadow-xl hover:scale-110 transition-all duration-300 object-cover"
          alt={meal.strMeal}
        />
      </div>

      <div className="w-full px-4">
        <p className="tracking-wider text-xl mt-6 text-center font-medium 
          bg-gradient-to-r from-[#FDBD84] to-[#FDBD84]/70 bg-clip-text text-transparent
          mb-6">
          {meal.strMeal}
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full
            bg-gradient-to-r from-white/10 to-transparent
            border border-white/10 backdrop-blur-sm
            hover:from-[#FDBD84]/20 hover:to-transparent transition-all duration-300">
            <MdPublic className="text-[#FDBD84]" size={18} />
            <span className="text-[14px] text-lightGray hover:text-[#FDBD84] transition-colors">
              {meal.strArea}
            </span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full
            bg-gradient-to-r from-white/10 to-transparent
            border border-white/10 backdrop-blur-sm
            hover:from-[#FDBD84]/20 hover:to-transparent transition-all duration-300">
            <MdFastfood className="text-[#FDBD84]" size={18} />
            <span className="text-[14px] text-lightGray hover:text-[#FDBD84] transition-colors">
              {meal.strCategory}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

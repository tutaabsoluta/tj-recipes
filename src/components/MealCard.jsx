import { MdPublic } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMealStore } from "../store/store";

export const MealCard = ({ src, title, area, category }) => {

  const setSelectedMeal = useMealStore( ( state ) => state.setSelectedMeal );
  const navigate = useNavigate();

  const onRecipe = () => {
    setSelectedMeal({ src, title, area, category })
    navigate('/recipe')
  }

  return (
    <div className="bento-main w-[310px] h-[381px] flex flex-col items-center justify-center cursor-pointer" onClick={ onRecipe }>
      <div>
        <img
          src={ src }
          className="w-[203px] h-[205px] rounded-xl shadow-xl"
        />
      </div>

      <div>
        <p className="tracking-wider text-xl mt-8 text-center">{ title }</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <p className="flex items-center justce gap-1 text-[14px] text-lightGray">
            <MdPublic color="FDBD84" />
            { area }
          </p>
          <p className="flex items-center gap-2 text-[14px] text-lightGray">
            <MdFastfood color="FDBD84" />
            { category }
          </p>
        </div>
      </div>
    </div>
  );
};

import { useMealStore } from "../store/store";
import { MdPublic, MdFastfood, MdRestaurantMenu } from "react-icons/md";

export const RecipePage = () => {
  const selectedMeal = useMealStore((state) => state.selectedMeal);

  if (!selectedMeal) return <p>No meal selected</p>; // Manejo de error si no hay datos

  const { title, category, area, src } = selectedMeal;

  return (
    <section className="container mx-auto mt-48 flex gap-24">
      <div className="w-3/5">
        <p className="uppercase text-warmOrange tracking-wider text-xs">
          Main Dish
        </p>
        <h3 className="text-[40px]">{title}</h3>
        <div className="flex gap-4">
          {/* Área */}
          <div>
            <p>{area}</p>
            <MdFastfood color="FDBD84" />
          </div>
          {/* Categoría */}
          <div>
            <p>{category}</p>
            <MdPublic color="FDBD84" />
          </div>
          {/* Main ingredient */}
          <div>
            <p>{category}</p>
            <MdRestaurantMenu color="FDBD84" />
          </div>
        </div>
      </div>

      <div className="w-2/5">
        <img src={src} alt="Dish Image" className="max-w-xs h-auto rounded-xl" />
      </div>
    </section>
  );
};

// strIngredient, strInstructions, strMeasure

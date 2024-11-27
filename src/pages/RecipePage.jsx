import { useMealStore } from "../store/store";
import { MdPublic, MdFastfood } from "react-icons/md";

export const RecipePage = () => {

  const activeId = useMealStore( ( state ) => state.activeId )
  const recipes = useMealStore(( state ) => state.recipes)

  const currentRecipe = recipes.find( recipe => recipe.idMeal === activeId );

  const onTest = () => {
    console.log(currentRecipe)
  }

  return (
    <section className="container mx-auto mt-48 flex gap-24">
      <div className="w-3/5" onClick={onTest}>
        <p className="uppercase text-warmOrange tracking-wider text-xs">
          Main Dish
        </p>
        <h3 className="text-[40px]">{ currentRecipe.strMeal }</h3>
        <div className="flex gap-4">
          {/* Área */}
          <div>
            <p>{ currentRecipe.strCategory }</p>
            <MdFastfood color="FDBD84" />
          </div>
          {/* Categoría */}
          <div>
            <p>{ currentRecipe.strArea }</p>
            <MdPublic color="FDBD84" />
          </div>
        </div>
      </div>

      <div className="w-2/5">
        <img src={ currentRecipe.strMealThumb } alt="Dish Image" className="max-w-xs h-auto rounded-xl" />
      </div>
    </section>
  );
};

// strIngredient, strInstructions, strMeasure

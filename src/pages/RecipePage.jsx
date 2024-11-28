import { useMealStore } from "../store/store";
import { MdPublic, MdFastfood } from "react-icons/md";

export const RecipePage = () => {

  const activeId = useMealStore( ( state ) => state.activeId )
  const recipes = useMealStore(( state ) => state.recipes)

  const currentRecipe = recipes.find( recipe => recipe.idMeal === activeId );
  
  // Evalua que incluya el string y que tenga un valor valido
  // Se actualiza cada llave con su valor asociado
  const ingredients = Object.keys(currentRecipe).filter( key => key.includes('strIngredient') && currentRecipe[key] ).map( key => currentRecipe[key] )

  const amounts = Object.keys(currentRecipe).filter( key => key.includes('strMeasure') && currentRecipe[key] ).map( key => currentRecipe[key] )


  const instructions = currentRecipe.strInstructions.split('.')

  console.log(instructions[3])
  return (
    <section className="container mx-auto mt-48 flex gap-24">
      <div className="w-3/5">
        <p className="uppercase text-warmOrange tracking-wider text-xs">
          Main Dish
        </p>
        <h3 className="text-[40px]">{ currentRecipe.strMeal }</h3>
        <div className="flex gap-4">
          {/* Área */}
          <div className="flex items-center gap-2">
            <p>{ currentRecipe.strCategory }</p>
            <MdFastfood color="FDBD84" />
          </div>
          {/* Categoría */}
          <div className="flex items-center gap-2">
            <p>{ currentRecipe.strArea }</p>
            <MdPublic color="FDBD84" />
          </div>
        </div>

        {/* Ingredients and amounts */}
        <h5>Ingredients</h5>
        <div className="flex gap-4">
          <div>
            {
              ingredients.map( ingredient => (
                <div>
                <p className="text-[16px]">{ ingredient }</p>
                </div>
              ) )
            }
          </div>
          
          <div>
            {
              amounts.map( amount => (
                <p className="text-[16px]">{ amount }</p>
              ) )
            }
          </div>
        </div>

        {/* Instructions */}
        <div>
            {
              instructions.map( ( instruction, index ) => (
                <div>
                  <p>{ `Step: ${index +1}` }</p>
                  <p>{ instruction }</p>
                </div>
              ) )
            }
        </div>
      </div>

      <div className="w-2/5">
        <img src={ currentRecipe.strMealThumb } alt="Dish Image" className="max-w-xs h-auto rounded-xl" />
      </div>
    </section>
  );
};

// strIngredient, strInstructions, strMeasure

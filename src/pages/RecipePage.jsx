import { useMealStore } from "../store/store";
import { MdPublic, MdFastfood } from "react-icons/md";

export const RecipePage = () => {
  const activeId = useMealStore((state) => state.activeId);
  const recipes = useMealStore((state) => state.recipes);

  const currentRecipe = recipes.find((recipe) => recipe.idMeal === activeId);

  const ingredients = Object.keys(currentRecipe)
    .filter((key) => key.includes("strIngredient") && currentRecipe[key])
    .map((key) => currentRecipe[key]);

  const amounts = Object.keys(currentRecipe)
    .filter((key) => key.includes("strMeasure") && currentRecipe[key])
    .map((key) => currentRecipe[key]);

  const instructions = currentRecipe.strInstructions.split(".");

  return (
    <section className="container mx-auto py-24 px-8">

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-12">

        <div className="col-span-7">
          <p className="uppercase text-warmOrange tracking-widest text-xs font-bold">
            Main Dish
          </p>
          <h3 className="text-4xl md:text-5xl mb-4">{currentRecipe.strMeal}</h3>
          

          <div className="flex gap-6 mb-8">
            <div className="flex items-center gap-2 bg-softBlueGray/10 px-4 py-2 rounded-lg">
              <p>{currentRecipe.strCategory}</p>
              <MdFastfood color="FDBD84" />
            </div>
            <div className="flex items-center gap-2 bg-softBlueGray/10 px-4 py-2 rounded-lg">
              <p>{currentRecipe.strArea}</p>
              <MdPublic color="FDBD84" />
            </div>
          </div>

          <div className="md:hidden mb-8">
            <img
              src={currentRecipe.strMealThumb}
              alt="Dish Image"
              className="w-full rounded-xl"
            />
          </div>

          <div className="mb-12">
            <h5 className="font-bold text-xl mb-4">Ingredients</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="bg-softBlueGray/10 backdrop-blur-sm p-4 rounded-xl border border-warmOrange/10 hover:border-warmOrange/30 transition-all duration-300 group"
                >
                  <p className="text-[16px] text-warmOrange font-medium mb-2 group-hover:text-warmOrange/80 truncate">
                    {ingredient}
                  </p>
                  <p className="text-[14px] text-white/70">
                    {amounts[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h5 className="font-bold text-xl mb-6">Steps to Follow</h5>
            <div className="space-y-6">
              {instructions
                .filter((instruction) => instruction.trim() !== "")
                .map((instruction, index) => (
                  <div 
                    key={index} 
                    className="flex gap-6 items-start group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="bg-softBlueGray/20 w-11 h-11 rounded-full flex items-center justify-center border-2 border-warmOrange group-hover:bg-warmOrange/20 transition-colors duration-300 shrink-0">
                      <span className="text-warmOrange font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 bg-softBlueGray/10 backdrop-blur-sm p-6 rounded-xl border border-warmOrange/10 group-hover:border-warmOrange/30 transition-all duration-300">
                      <p className="text-[15px] text-white/90 leading-relaxed">
                        {instruction}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block col-span-5">
          <div className="sticky top-24">
            <img
              src={currentRecipe.strMealThumb}
              alt="Dish Image"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

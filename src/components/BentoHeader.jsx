import { useEffect, useState } from "react";
import { getRandomMeal, getMealById } from "../api/mealdbApi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPublic } from "react-icons/md";
import { MdFastfood } from "react-icons/md";

export const BentoHeader = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [bentoMeal, setbentoMeal] = useState({});

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const randomMeal = await getRandomMeal();
        setRandomMeal(randomMeal);
      } catch (error) {
        console.error("Error fetching latest meals:", error);
      }
    };

    const fetchBentoMeal = async () => {
      try {
        const bentoMeal = await getMealById(52777);
        setbentoMeal(bentoMeal);
      } catch (error) {
        console.error("Error fetching meal id 1:", error);
      }
    };

    fetchRandomMeal();
    fetchBentoMeal();
  }, []);

  const { strMeal, strArea, strCategory, strMealThumb } = bentoMeal;

  return (
    <div className="grid grid-cols-2 grid-rows-4 place-items-center gap-6">
      <div className="row-span-4 w-[333px] h-[410px] bento-main shadow-xl hover:scale-105 duration-300 ease-in-out">
        {randomMeal.map((meal) => (
          <div key={meal.idMeal} className="flex flex-col items-center">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-[250px] h-[250px] rounded-full shadow-xl mt-4"
            />

            <div className="mt-8">
              <p className="text-center tracking-wider text-xl">{meal.strMeal}</p>
              <div className="flex items-center justify-center gap-8 mt-4">
                <p className="flex items-center gap-1 text-[14px] text-lightGray">
                  <MdPublic color="FDBD84" />
                  {meal.strArea}
                </p>
                <p className="flex items-center gap-2 text-[14px] text-lightGray">
                  <MdFastfood color="FDBD84" />
                  {meal.strCategory}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center row-span-2 w-[410px] h-[195px] bento-sec shadow-xl hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-center gap-6">
          <div>
            <img
              src={strMealThumb}
              className="w-[150px] h-[150px] rounded-full shadow-xl"
            />
          </div>

          <div>
            <p className="tracking-wider text-xl">{strMeal}</p>
            <div className="flex items-center justify-start gap-6 mt-4">
              <p className="flex items-center gap-1 text-[14px] text-lightGray">
                <MdPublic color="FDBD84" />
                {strArea}
              </p>
              <p className="flex items-center gap-2 text-[14px] text-lightGray">
                <MdFastfood color="FDBD84" />
                {strCategory}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center row-span-2 w-[410px] h-[195px] bento-sec shadow-xl hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-center justify-center gap-6">
          <button
            className="rounded-full w-[112px] h-[112px] flex items-center justify-center shadow-xl"
            style={{ backgroundColor: "rgba(211, 211, 211, 0.15)" }}
          >
            <FaArrowRightLong
              color="white"
              style={{ width: "42px", height: "auto" }}
            />
          </button>
          <p className="tracking-wider text-xl">Discover all our recipes here.</p>
        </div>
      </div>
    </div>
  );
};

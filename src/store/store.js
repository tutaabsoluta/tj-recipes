import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useMealStore = create(
  persist(
    (set) => ({
      selectedMeal: null,
      recipe: [],
      activeId: null,
      setSelectedMeal: (meal) => set({ selectedMeal: meal }),
      setRecipes: ( meal ) => set({ recipes: meal }),

      getRecipeById: ( id ) => {
        set(() => ({
          activeId: id
        }))
      },
    }),
    {
      name: 'meal-storage',
    }
  )
);
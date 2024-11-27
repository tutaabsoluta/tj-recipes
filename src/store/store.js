import { create } from 'zustand'


export const useMealStore = create((set) => ({
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
}));
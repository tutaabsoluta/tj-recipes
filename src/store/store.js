import { create } from 'zustand'


export const useMealStore = create((set) => ({
    selectedMeal: null,
    recipe: [],
    setSelectedMeal: (meal) => set({ selectedMeal: meal }),
    setRecipe: ( meal ) => set({ recipe: meal }),
}));
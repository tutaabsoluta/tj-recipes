import React from "react";
import { Route, Routes } from "react-router-dom";
import { BlogPage, HomePage, RecipePage, SearchPage } from "../pages";
import { AppLayout } from "../layout/AppLayout";

export const RecipeRouter = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        <Route path="recipe" element={<RecipePage />}></Route>
        <Route path="blog/:id" element={<BlogPage />}></Route>

        <Route path="/*" element={<HomePage />}></Route>
      </Routes>
    </AppLayout>
  );
};

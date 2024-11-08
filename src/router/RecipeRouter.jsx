import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlogPage, HomePage, RecipePage, SearchPage } from '../pages'

export const RecipeRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage /> }></Route>
        <Route path='search' element={ <SearchPage /> }></Route>
        <Route path='recipe/:id' element={ <RecipePage /> }></Route>
        <Route path='blog/:id' element={ <BlogPage /> } ></Route>

        <Route path='/*' element={ <HomePage /> } ></Route>
    </Routes>
  )
}

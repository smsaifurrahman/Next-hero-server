/** @format */
"use client"

import React, { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const loadData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        const data = await res.json()
        setMeals(data.meals)
    }
    const handler = (e) => {
        setSearch(e.target.value);
    }
    // useEffect(()=> {
    //     loadData()
    // }, [search])

   return (
      <div className="mt-2">
         <input
            onChange={handler}
            className=" p-2 outline-none border-2   my-3"
            type="text"
            placeholder="Search meals..."
         />
         <button onClick={()=> loadData()} className="bg-red-400 p-2">Search</button>
         <div className="mt-12 grid grid-cols-3 gap-4">

                {
                    meals?.length > 0 && meals?.map((meal) => (
                        <div key={meal?.idMeal} className="border-2 p-4">
                            <h3>{meal.strMeal}</h3>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }
         </div>
      </div>
   );
};

export default Meals;

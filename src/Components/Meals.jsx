/** @format */
"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');
    console.log(meals);
    const loadData = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        const data = await res.json()
        setMeals(data.meals);
        setError('')
        } catch (error) {
            setError('No Data found')
        }
        
    }
    const handler = (e) => {
        setSearch(e.target.value);
    }
    // useEffect(()=> {
    //     loadData()
    // }, [])

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
                    meals?.length > 0 && !error && meals?.map((meal) => (
                        <div key={meal?.idMeal} className="border-2 p-4">
                             <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500} />
                            <h3>{meal.strMeal}</h3>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }

                {
                    error && <h2>No Data found</h2>
                }
         </div>
      </div>
   );
};

export default Meals;

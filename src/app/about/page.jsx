import React from 'react';
import {Headland_One} from 'next/font/google';

const headland = Headland_One({weight: ['400'], subsets: ['latin']});

const getTime = async () => {
    const res = await fetch('http://localhost:3000/time' , {next: {revalidate: 5}})
    const data = await res.json()
    return data.currentTime;
}

const page = async () => {
    const currentTime = await getTime()
    return (
        <div className={` ${headland.className} min-h-screen`}>
            About Page
            <h3> Time: {currentTime} </h3>
        </div>
    );
};

export default page;
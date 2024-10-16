import React from 'react';
import {Headland_One} from 'next/font/google';

const headland = Headland_One({weight: ['400'], subsets: ['latin']})

const page = () => {
    return (
        <div className={` ${headland.className} min-h-screen`}>
            About Page
        </div>
    );
};

export default page;
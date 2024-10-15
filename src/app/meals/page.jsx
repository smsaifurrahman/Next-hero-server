import Meals from '@/Components/Meals';

const MealsPage = () => {

    return (
        <div className='p-12'>
            <h2 className='text-3xl text-center'>Choose Your Meals</h2>
            <p>Find meal of your choice by Searching</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;
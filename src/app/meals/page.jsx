import Meals from '@/Components/Meals';
import styles from './styles.module.css'
export const metadata = {
    title: {
        absolute: "Meals"
    },

    description: "Post Page",
  };

const MealsPage = () => {

    return (
        <div className='p-12'>
            <h2 className='text-3xl text-center'>Choose Your Meals</h2>
            <p className="text-2xl">Find meal of your choice by Searching</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;
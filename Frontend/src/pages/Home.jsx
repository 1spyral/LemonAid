import { Component } from 'react';
import FoodList from './../components/FoodList';
import AddInventoryButton from './../components/AddInventoryButton';
import RecipeList from '../components/RecipeList';
import Header from "./Header"; 

function Home() {
    return (
        <>
            <Header />
            <div className="flex w-5/6 m-auto justify-around">
                <div className="bg-saffron w-3/5 h-4/5 p-4 m-8 rounded-xl text-xl">
                    <FoodList />
                </div>
                <div className="w-2/5 h-4/5 p-4">
                    <div className="flex bg-raspberry h-4/5 m-5 rounded-xl text-xl">
                        <AddInventoryButton />
                    </div>
                    <div className="flex h-screen rounded-xl text-xl">
                        <RecipeList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
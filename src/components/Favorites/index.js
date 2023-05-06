import React from 'react';
import ProductCard from "../Product/ProductCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {favorite} = useSelector(s => s.favorite)
    return (
        <div className="py-10 bg-gray-950">
            <div className="flex flex-wrap gap-24 justify-center">
                {
                favorite.map(el => <ProductCard el={el}/>)
            }
            </div>
        </div>
    );
};

export default Favorites;
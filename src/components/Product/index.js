import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/reducer/reducer";

const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(()=> {
        dispatch(getProduct())
    }, [])
    return (
        <div className="py-10 bg-gray-950">
            <div className="flex flex-wrap gap-24 justify-center">
                {
                    product.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;
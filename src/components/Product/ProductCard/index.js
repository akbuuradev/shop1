import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {BsBasket2Fill} from "react-icons/bs";
import {AiTwotoneHeart} from "react-icons/ai";

const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const {basket} = useSelector(s => s.basket)
    const {favorite} = useSelector(s => s.favorite)
    let heart = favorite.some(some => some.id === el.id)
        let bas = basket.some(some => some.id === el.id)
    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const favoriteBtn = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }

    return (
        <div
            className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Link to={`/details/${el.id}`}>
                    <img className="rounded-t-lg" src={el.image} alt=""/>
                </Link>
            </a>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-white">{el.description}</p>
                <a href="#"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-white ">
                    Цена: {el.price}$
                </a>
                {
                    bas ?
                        <Link to={"/basket"}>
                            <button type="button"
                                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                               <BsBasket2Fill/>
                            </button>
                        </Link> :
                        <button onClick={addBasket}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Купить
                        </button>
                }
                <button onClick={favoriteBtn}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <AiTwotoneHeart className={heart ? "text-red-600" : "text-white "}/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
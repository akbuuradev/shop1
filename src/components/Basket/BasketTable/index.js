import React from 'react';
import {useDispatch} from "react-redux";

const BasketTable = ({el}) => {
    const dispatch = useDispatch()

    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }

    const deleteBasket = () => {
        dispatch({type: "DELETE_BASKET", payload: el})
    }

    const delProduct = () => {
        dispatch({type:"DEL_PRODUCT", payload: el})
    }

    const decBasket = () => {
        dispatch({type: "DEC_BASKET", payload: el})
    }
    return (
        <tr className="bg-gray-950 text-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4">
                <img src={el.image} width={100} alt=""/>
            </th>
            <td className="px-6 py-4">
                {el.title}
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-white ">
                <div className="flex">
                    <button onClick={decBasket}>-</button>
                    <p className="mx-2">{el.count}</p>
                    <button onClick={addBasket}>+</button>
                </div>
            </td>
            <td className="px-6 py-4">
                 {el.price * el.count}$
            </td>
            <td className="px-6 py-4">
                <button onClick={deleteBasket}
                        className="focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                </button>
            </td>

        </tr>
    );
};

export default BasketTable;
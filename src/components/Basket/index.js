import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";

const Basket = ({el}) => {
    const {basket} = useSelector(state => state.basket)
    const total = basket.reduce((acc, el) => {
        return acc+ el.count * el.price
    }, 0)

    return (
        <div className="relative  overflow-x-auto w-4/5 mx-auto  my-5 ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs bg-gray-600 text-white border-8 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Img
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                     <th scope="col" className="px-6 py-3">
                        Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody className="bg-gray-950">
                {
                    basket.map((el) => (
                        <BasketTable el={el}/>
                    ))
                }
                </tbody>
            </table>
            <div>
                {total === 0 ? null : <h1 className="text-xl">Total : {total}$</h1>}
            </div>
        </div>

    );
};

export default Basket;
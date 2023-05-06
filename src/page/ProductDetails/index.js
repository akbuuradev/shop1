import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()

    const getDetails = () => {
        return axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {
        getDetails()
    }, [])
    return (
        <div className="flex items-start  justify-center">
            <div className="bg-blue-500 w-2/3 h-2/5 mt-36 mb-2.5 rounded-3xl ml-8">
                <div className="flex  w-2/3 py-32 mr-[50px]">
                    <img className="bg-black ml-8 rounded-3xl" src={details.image} width={200}
                                                         height={200}  alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal "><h1
                        className="mb-2 text-3xl ml-8 font-bold tracking-tight  dark:text-black">
                        {details.title}
                    </h1>
                        <h3
                        className="mb-2 text-3xl  ml-8 font-bold tracking-tight  dark:text-white">
                        {details.category}
                    </h3>
                        <p
                        className="mb-3 font-normal ml-8 text-white dark:text-black">
                        {details.description}
                    </p>
                        <div className="flex items-center justify-between ml-8"><p
                            className="mb-3 font-normal text-white dark:text-white">
                            {details.price} $
                        </p>
                            <Link to={"/product"}>
                                <button type="button"
                                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                    назад
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
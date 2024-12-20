import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ordered, restoke } from '../cake/cakeSlice'

export const CakeView = () => {
    const numOfCake = useSelector((state) => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cake - {numOfCake}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restoke(5))}>Restoke Cake</button>
        </div>
    )
}

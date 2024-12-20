import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ordered, restoke } from '../icecream/icecreamSlice'

export const IcecreamView = () => {
    const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of icecream - {numOfIcecream}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <button onClick={() => dispatch(restoke(5))}>Restoke icecream</button>
        </div>
    )
}

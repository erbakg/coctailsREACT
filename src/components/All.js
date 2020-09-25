import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function All(props) {
    return (
        <div className='contentAll'>
            <Link to={'/coctail/' + props.coctail.strDrink}>
                <h4>{props.coctail.strDrink}</h4>
                <img className='contentImg' src={props.coctail.strDrinkThumb} />
            </Link>
        </div>
    )
}
export default All;
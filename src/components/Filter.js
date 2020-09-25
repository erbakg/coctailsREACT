import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Filter(props) {
    let div = document.getElementsByClassName('cocntentGo')
    if (props.word === props.coctail.strDrink){
        return (
            <div className='contentGo'>
                <Link to={'/coctail/' + props.coctail.strDrink}>
                    <h4>{props.coctail.strDrink}</h4>
                    <img className='contentGoImg' src={props.coctail.strDrinkThumb} />
                </Link>
            </div>
        )
    }
    return(
        div
    )
}
export default Filter;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Coctail(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        go()
    }, [])
    const go = async () => {
        let name = props.match.params.name
        let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
        let data = await resp.json()
        setData(data.drinks[0])
        console.log(data)
    }

    return (
        
        <div>
            <h1>{data.strDrink}</h1>
            <img style={{ width: '300px' }} src={data.strDrinkThumb} />
            <p>Instruction: {data.strInstructions}</p>
            <h6>Ingridients</h6>
            <ul>
                <Link to={'/ingridient/' + data.strIngredient1}>
                    <li>{data.strIngredient1}</li>
                </Link>
                <Link to={'/ingridient/' + data.strIngredient2}>
                    <li>{data.strIngredient2}</li>
                </Link>
                <Link to={'/ingridient/' + data.strIngredient3}>
                    <li>{data.strIngredient3}</li>
                </Link>
                <Link to={'/ingridient/' + data.strIngredient4}>
                    <li>{data.strIngredient4}</li>
                </Link>
            </ul>
            <h6>Measure</h6>
            <ul>
                <li>{data.strMeasure1}</li>
                <li>{data.strMeasure2}</li>
                <li>{data.strMeasure3}</li>
                <li>{data.strMeasure4}</li>
            </ul>
        </div>
    )
}
export default Coctail;

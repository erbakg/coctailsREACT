import React, { useEffect, useState } from 'react'

// export default class Ingridient extends Component {
function Ingredient(props){
    
    const [data, setData] = useState([])
    // state = {
    //     data: []
    // }

    useEffect(() => {
        go()
    }, [])

        const go = async()=>{
            let name = props.match.params.ing
            let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + name)
            let data = await resp.json()
    
            setData(data.ingredients[0])
            console.log(data)

        }
        return (
            <div>
               <h1>Ingredient name: {data.strIngredient}</h1> 
               <h3>Description:</h3> 
               <p>{data.strDescription ?
               data.strDescription : 'Information underfined'
               }</p> 
            </div>
        )
    }

export default Ingredient;
// }

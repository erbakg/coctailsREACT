import React, { Component, useState, useEffect} from 'react'
import './App.css'
import All from './components/All'
import Filter from './components/Filter'

  function App(){
    const [data, setData] = useState(null)

   useEffect(() => {
     go()
   }, [])

    const go= async ()=>{
      let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      let data = await resp.json()
      setData(data.drinks) 
    }

    const search = (val) =>{
      let name = val
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
      if(name === 'Non_Alcoholic'){
       find(name, url)
      }else if(name === 'Alcoholic'){
        find(name, url)
      }else{
        go()
      }
    }
     const find = async (name, url)=>{
      let resp = await fetch(url+name)
      let data = await resp.json()
      setData(data.drinks)
    }
  
    const filterByName = async(val) =>{
      if (val !=''){
        let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +val)
        let data = await resp.json()
        setData(data.drinks)
      }else{
        go()
      }
    }
  
      return (
        <div className='mainDivApp'>
          <input 
          type='text' 
          placeholder='Поисковик' 
          onChange={(e) => {
            filterByName(e.target.value)
          }} 
  
          />
          <h1 className='h1'>Coctails</h1>
          <select className='btnMD' onChange={(e) =>{
           search(e.target.value)
          }}>
            <option value='Coctail'>All</option>
            <option value='Alcoholic'>Alcoholic</option>
            <option value='Non_Alcoholic'>Non_Alcoholic</option>
          </select>
          { data ?
            data.map(elem=>{
              return(
                <Filter coctail = {elem} />
              )
            }):null
          }
          <div className='mainDivAll'>
          {
            data ?
            data.map(elem=>{
              return(
                <All coctail = {elem} />
              )
            }):null
          }
          </div>
        </div>
      )
    }
    export default App;
  // }

// import React, { Component } from 'react'

// export default class App extends Component {
//   state={
//     count:0
//   }
//   render() {
//     return (
//       <div>
//        <h1>Count=={this.state.count}</h1> 
//        <button onClick={() =>{
//          this.setState({
//            count:this.state.count+1
//          })
//        }
//        }>Click me</button>
//       </div>
//     )
//   }
// }

// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>Count=={count}</h1>
//       <button onClick={() => {
//         setCount(count+1)
//       }
//       }>Click me</button>
//     </div>
//   )
// }
// export default App

// import React, { Component } from 'react'

// export default class App extends Component {
//  constructor(props){
//    super(props)
//    this.state={
//      count:0
//    }
//  }

//   render() {
//     return (
//       <div>
//         <h1>Count=={this.state.count}</h1>
//         <button onClick={() => {
//           this.setState({
//             count: this.state.count + 1
//           })
//         }
//         }>Click me</button>
//       </div>
//     )
//   }
// }

// import React, { useState, useEffect } from 'react'

// function App(){
//   const [count, setCount] = useState(0)

//   useEffect(()=> {
//     document.title = 'clicked ' + count
//   })
//   return (
//     <div>
//       <h1>Count={count}</h1>
//       <button onClick={() => {
//         setCount(count+1)
//       }
//       }>Click me</button>
//     </div>
//   )
// }
// export default App;
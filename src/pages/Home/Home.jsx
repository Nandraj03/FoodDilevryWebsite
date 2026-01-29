import React from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import { useState } from 'react'
// import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
const Home = () => {

  const [category,setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      </div>
  )
}

export default Home
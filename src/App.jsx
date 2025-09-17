import React, { use } from 'react'
import { useState } from 'react'

// this is a functional component/method which is to be called in App function
const Card = ({ title }) => {
  return (
    <div  className= "card" >
      <h2> {title}</h2>
    </div>
  )
}


// this is the main function inside we will call other components/methods
const App = () => {
  const [hasLiked, setHasLiked ] = useState(false);
  return (
    <div className="card-container">

      <Card title="Star Wars " rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />


    </div>



  )
}

export default App

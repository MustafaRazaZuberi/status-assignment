import React from 'react'

const App = () => {
  return (
    <div>
      <h1>redux class</h1>

      <div className="main" style={{display :"flex",flexDirection :"row", justifyContent : "center",alignItems : "center"}}>
      <button className='btn btn-primary' style={{fontSize: "32px" , paddingLeft : "32px" , paddingRight : "32px"}}>+</button>
      <h3 style={{marginLeft : '30px',marginRight : '30px'}}>0</h3>
      <button className='btn btn-primary' style={{fontSize: "32px" , paddingLeft : "32px" , paddingRight : "32px"}}>-</button>

      </div>
      
          </div>
  )
}

export default App

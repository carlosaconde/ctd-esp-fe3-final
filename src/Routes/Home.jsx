import React, { useContext } from 'react'
import Card from '../Components/Card'
import ContextProvider, { ContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

 const {providerValues} = useContext(ContextGlobal)

const {data} = providerValues.state

console.log(providerValues);
  return (
    <>
    
    <h1>Home</h1>
      <div className='card-grid'>
       
        {/* Aqui deberias renderizar las cards */}
          
          
            {
              data.map(dentist=>
                (
                  <Card name={dentist.name} username={dentist.username} id={dentist.id}/>
                ))
            }
            
          
        
        
          
        
      </div>
    </>
      
    
  )
}

export default Home
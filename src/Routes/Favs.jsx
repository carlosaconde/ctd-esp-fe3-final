import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Favs = () => {
const dentistsFromStorage = JSON.parse(localStorage.getItem("dentists"))||[]
console.log(dentistsFromStorage);  
const { providerValues } = useContext(ContextGlobal);

  const { data } = providerValues.state;

  const filteredDentists = data.filter(dentist => dentistsFromStorage.find(dent=> dent.id === dentist.id))

  console.log(filteredDentists);
return (
    <>
      <h1>Dentists Favs</h1>
      <div  className="card-grid">
      
      {
        (filteredDentists.length>0)? filteredDentists.map((dentist) => (
          <Card
            key={dentist.name}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        )) 
        : <h2>No Hay Asignados Dentistas Favoritos</h2>
      }
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;

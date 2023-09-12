import React, { useContext, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const { providerValues } = useContext(ContextGlobal);

  const { data } = providerValues.state;


  return (
    <>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}

        {data.map((dentist) => (
          <Link style={{color:'black'}} to={`/dentista/${dentist.id}`}>
          <Card
            key={dentist.name}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

import { useContext, useReducer, useState } from "react";
import docImg from "../images/doctor.jpg";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, website, phone, email }) => {
  const { addToStorage } = useContext(ContextGlobal);

  const exists = (id) => {
    const initialState = JSON.parse(localStorage.getItem("dentists")) || [];
    // console.log(initialState);

    return initialState.some((dent) => dent.id === id);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        break;

      case "remove":
        break;
      default:
        return state;
    }
  };

  const AddFav = (id) => {
    const initialState = JSON.parse(localStorage.getItem("dentists")) || [];
    // Aqui iria la logica para agregar la Card en el localStorage
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);
  };

  const addFav = () => {
    addToStorage({ id });
  };
  return (
    <div className="card">
      <img style={{ width: "150px" }} src={docImg} alt="" />
      <h3>{name}</h3>
      <h3>{username}</h3>
      {email && phone && website && (
        <div>
          <h5>{email}</h5>
          <h5>{phone}</h5>
          <h5>{website}</h5>
        </div>
      )}
      <h5>{id}</h5>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {!exists(id) ? (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      ) : (
        <button onClick={() => {}} className="favButton">
          remove fav
        </button>
      )}
    </div>
  );
};

export default Card;

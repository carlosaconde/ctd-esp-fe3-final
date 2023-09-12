import axios from "axios";
import { createContext, useEffect, useMemo, useReducer, useState } from "react";

export const initialState = { theme: "light", data: [] };

const DentistContext = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [resp, setResp] = useState([]);

  try {
    const getFetch = async () => {
      const { data } = await axios.get(url);
      //   console.log(data);
      setResp(data);
    };
    useEffect(() => {
      getFetch();
    }, []);
  } catch (error) {
    console.log(error);
  }
  // console.log(resp);

  return resp;
};

console.log(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, theme: "dark" };
    case "light":
      return { ...state, theme: "light" };
    default:
      return state;
  }
};
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
 
 const [list, setList] = useState(JSON.parse(localStorage.getItem("dentists"))||[])

 const addToStorage =(id)=>{

  let exists = list.some (dent=> dent.id === id)
  if(!exists){
    localStorage.setItem("dentists", JSON.stringify([...list,id]) )
    setList([...list,id])
  } 
 }
 
 
 
 
  initialState.data = DentistContext();

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  const providerValues = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return (
    <ContextGlobal.Provider value={{ addToStorage,providerValues }}>
      {children}
    </ContextGlobal.Provider>
  );
};

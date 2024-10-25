"use client"
// context/MyContext.js
import React, {createContext, useState, useContext} from 'react';

// Crear el contexto
const MyContext = createContext();

// Crear un hook para usar el contexto
export const useMyContext = () => {
    return useContext(MyContext);
};

// Crear un proveedor del contexto
export const MyProvider = ({children}) => {
    const [showMap, setShowMap] = useState(true);

    const ponertrue = () => {
        !showMap && setShowMap(true)
    };

    const ponerfalse= () => {
        showMap && setShowMap(false)
    };

    return (
        <MyContext.Provider value={{showMap, ponertrue, ponerfalse}}>
            {children}
        </MyContext.Provider>
    );
};


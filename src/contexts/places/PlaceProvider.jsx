import { createContext, useState } from "react";
import { placeService } from "../../services";

export const PlaceContex = createContext({
    places: [],
    createPlace:  async (placeData) => {},
   
});

export function PlaceProvider({children}) {

    const [places,setPlaces] = useState([]);

    const createPlace = async (placeData) => {

        try {

            const newPlace = await placeService.create(placeData);

            setPlaces((oldPlaces) => [...oldPlaces,newPlace]);
            
        } catch (err) {

            console.error('Error creating places',err)
            
        }
        

    }

    const contextValue = {
        places,
        createPlace,
    }

    return (

        <PlaceContex.Provider value={contextValue} >
            {children}

        </PlaceContex.Provider>

    )
}
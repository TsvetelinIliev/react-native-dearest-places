import { createContext, useEffect, useState } from "react";
import { placeService } from "../../services";

export const PlaceContex = createContext({
    places: [],
    async createPlace (placeData)  { },
    getPlacesById(placeId) { },
   
});

export function PlaceProvider({children}) {

    const [places,setPlaces] = useState([]);

    useEffect(() => {
        placeService.getAll()
        .then((data) => setPlaces(data))
        .catch((err) => console.error('Error fetching places',err));
    },[]);

    const createPlace = async (placeData) => {

        try {

            const newPlace = await placeService.create(placeData);

            setPlaces((oldPlaces) => [...oldPlaces,newPlace]);
            
        } catch (err) {

            console.error('Error creating places',err)
            
        }
        

    };

    const getPlacesById = (placeId) => {
        return places.find(p => p.id === placeId);

    };

    const contextValue = {
        places,
        createPlace,
        getPlacesById,
    }

    return (

        <PlaceContex.Provider value={contextValue} >
            {children}

        </PlaceContex.Provider>

    )
}
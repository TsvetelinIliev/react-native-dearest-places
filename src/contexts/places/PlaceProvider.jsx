import { createContext, useEffect, useState } from "react";
import { placeService } from "../../services";


export const PlaceContex = createContext({
    places: [],
    async createPlace (placeData)  { },
    getPlacesById(placeId) { },
    async deletePlace(placeId) { },
   
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

    const deletePlace = async (placeId) => {

        try {
            await placeService.deletePlace(placeId);
            setPlaces((oldPlaces) => oldPlaces.filter(place => place.id !== placeId));
            
        } catch (err) {

            console.error('Error deleteing place',err)
            
        }

    }

    const contextValue = {
        places,
        createPlace,
        getPlacesById,
        deletePlace,
    }

    return (

        <PlaceContex.Provider value={contextValue} >
            {children}

        </PlaceContex.Provider>

    )
}
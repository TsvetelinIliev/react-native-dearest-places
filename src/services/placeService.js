import { collection,addDoc } from 'firebase/firestore';
import { api } from "./api";
import { db } from '../firebaseConfig';
import { log } from 'firebase/firestore/pipelines';


export async function getAll() {
    const result = await api.get('/places');

    return result.data;
}

export async function create(placeData) {

    //const result = await api.post('/places',placeData);

     const ref = await addDoc(collection(db,'places'),placeData);

    

   

 

    return ref;
    
};

export async function getById(placeId) {
    const result = await api.get(`/places/${placeId}`);

    return result.data;
}

export async function deletePlace(placeId) {
     const result = await api.delete(`/places/${placeId}`);

     return result.data;
    
}
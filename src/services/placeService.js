import { collection,addDoc,getDocs } from 'firebase/firestore';
import { ref , uploadBytes , getDownloadURL} from 'firebase/storage';
import { api } from "./api";
import { db, storage } from '../firebaseConfig';
import { log } from 'firebase/firestore/pipelines';
import uuid from 'react-native-uuid';


export async function getAll() {
    //const result = await api.get('/places');

    const result = await getDocs(collection(db, 'places'));

    const places = result.docs.map(doc => ({id: doc.id, ...doc.data()}));

    return places;
}

export async function create(fullPlaceData) {

    const { imageUri, ...placeData } = fullPlaceData;

    //const result = await api.post('/places',placeData);

    const response = await fetch(imageUri);
    const imageBlob = await response.blob();

    const imageRef = ref(storage, `places/${uuid.v4()}.jpg`);
    await uploadBytes(imageRef , imageBlob);
    const imageUrl = await getDownloadURL(imageRef);

    
     const result = await addDoc(collection(db,'places'),{...placeData , imageUri: imageUrl});

    

    return {id: result.id, ...placeData, imageUri: imageUrl};
    
};

export async function getById(placeId) {
    const result = await api.get(`/places/${placeId}`);

    return result.data;
}

export async function deletePlace(placeId) {
     const result = await api.delete(`/places/${placeId}`);

     return result.data;
    
}
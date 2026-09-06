import { api } from "./api";

export async function create(placeData) {

    const result = await api.post('/places',placeData);

    return result.data;
    
};
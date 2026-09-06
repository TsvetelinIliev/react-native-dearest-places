import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function usePersistedState(key,initialValue) {
    const [state,setState] = useState(initialValue);

    useEffect(() => {
        async function loadState() {

            try {
                const storedValue = await AsyncStorage.getItem(key);

                if(!storedValue) {

                    return;
                }
                setState(JSON.parse(storedValue));

            } catch (err) {

                console.error('Failed to load state!',err);
                
            }
        }

        loadState();

    },[key]);

    


    const setPersistedState = async (value) => {

        try {
            const valueToStore = value instanceof Function ? value(state) : value;

            setState(valueToStore);
            await AsyncStorage.setItem(key, JSON.stringify(valueToStore))

            
        } catch (err) {
            console.error('failed to set state',err);
            
        }
    };

    return [state,setPersistedState];
}
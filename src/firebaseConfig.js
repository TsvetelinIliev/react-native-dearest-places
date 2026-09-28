// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
initializeAuth,
getReactNativePersistence,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = JSON.parse(
process.env.EXPO_PUBLIC_FIREBASE_CONFIG
);

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
persistence: getReactNativePersistence(AsyncStorage)
});
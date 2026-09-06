import { useContext } from "react";
import { PlaceContex } from "./PlaceProvider";

export function usePlace() {

    const context = useContext(PlaceContex);

    return context;
}
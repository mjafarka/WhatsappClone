import { createContext, useContext, useReducer, useState } from "react";
import { searchByNameLocal } from "../localDB/localDB";
import { searchUserSubString } from "../firebase/fireBaseApi";


const SearchResultContext = createContext(null);

const SearchMethodDispachContext = createContext(null);

export const subNameContext = createContext("");

export function SearchProvider({ children }) {
    const [searchResult, dispatch] = useReducer(
        searchMethodReducer, initialResult);

    const [subName, setSubNameInContext] = useState("");

    return (
        <subNameContext.Provider value={{subName, setSubNameInContext}} >
            <SearchResultContext.Provider value={searchResult}>
                <SearchMethodDispachContext.Provider value={dispatch}>
                    {children}
                </SearchMethodDispachContext.Provider>
            </SearchResultContext.Provider>
        </subNameContext.Provider>
    )
}

export function useSearchResult() {
    return useContext(SearchResultContext);
}

export function useSearchMethodDispatcherContext() {
    return useContext(SearchMethodDispachContext);
}

// searcheResult : already searched result
async function searchMethodReducer(searchResult, action) { //action: {type: "recent", subName: "muh"}
    switch (action.type) {
        case "recent": {
            const profiles = searchByNameLocal(action.subName)
            return profiles;
        }
        case "new": {
            //db search
            console.log("come in the reducer function", action.subName)
            const profiles = await searchUserSubString(action.subName);
            console.log("profiles returned", profiles);
            return profiles
        }
        default: {
            throw new Error("search method reducer , Unknown Actoin: ", action.type);
        }
    }
}

const initialResult = [];

import {  createContext, useContext, useReducer } from "react";
import { searchByNameLocal } from "../localDB/localDB";
import { searchUserSubString } from "../firebase/fireBaseApi";


const SearchResultContext = createContext(null);

const SearchMethodDispachContext = createContext(null);

export function SearchProvider({children}) {
    const [searchResult, dispatch] = useReducer(
        searchMethodReducer, initialResult);

    return (
        <SearchResultContext.Provider value={searchResult}>
            <SearchMethodDispachContext.Provider value={dispatch}>
                {children}
            </SearchMethodDispachContext.Provider>
        </SearchResultContext.Provider>
    )
}

export function useSearchResult() {
    return useContext(SearchResultContext);
}

export function useSearchMethodDispatcherContext() {
    return useContext(SearchMethodDispachContext);
}

// searcheResult : already searched result
function searchMethodReducer(searchResult,action) { //action: {type: "recent", subName: "muh"}
    switch (action.type) {
        case "recent": {
            const profiles =  searchByNameLocal(action.subName)
            return profiles;
        }
        case "new": {
            //db search
            const profiles = searchUserSubString(action.subName);
            return profiles
        } 
        default: {
            throw new Error("search method reducer , Unknown Actoin: ", action.type);
        }
    }
}

const initialResult = [];

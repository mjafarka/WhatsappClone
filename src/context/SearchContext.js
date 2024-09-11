import { createContext, useContext, useReducer, useState } from "react";
import { searchByNameLocal } from "../localDB/localDB";
import { searchUserSubString } from "../firebase/fireBaseApi";
import { getRecentChatUsers } from "../firebase/helpers";
import { searchUserSubStringDB } from "../firebase/firebaseDB";

const SearchResultContext = createContext(null);

const SearchMethodDispachContext = createContext(null);

export const subNameContext = createContext("");

export const defaultContext = createContext(false);

export function SearchProvider({ children }) {
    const [searchResult, dispatch] = useReducer(
        searchMethodReducer, initialResult);

    const [subName, setSubNameInContext] = useState("");

    const [showSearchResult, setShowSearchResult] = useState(false);

    return (
        <defaultContext.Provider value={{showSearchResult, setShowSearchResult}}>
        <subNameContext.Provider value={{subName, setSubNameInContext}} >
            <SearchResultContext.Provider value={searchResult}>
                <SearchMethodDispachContext.Provider value={dispatch}>
                    {children}
                </SearchMethodDispachContext.Provider>
            </SearchResultContext.Provider>
        </subNameContext.Provider>
        </defaultContext.Provider>
    )
}

export function useSearchResult() {
    return useContext(SearchResultContext);
}

export function useSearchMethodDispatcherContext() {
    return useContext(SearchMethodDispachContext);
}

const setOfExcludedUserIds = new Set();

// searcheResult : already searched result
async function searchMethodReducer(searchResult, action) { //action: {type: "recent", subName: "muh"}
    switch (action.type) {
        case "recent": {
            // const profiles = searchByNameLocal(action.subName)
            const recentChatUsers = await getRecentChatUsers(action.recentHistoryDoc,
                                                            action.subName);
            return recentChatUsers;
        }
        case "new": {
            //db search
            // console.log("come in the reducer function", action.subName)
            // const profiles = await searchUserSubString(action.subName);
            // console.log("profiles returned", profiles);

            // const recentChatUsers = await getRecentChatUsers(action.recentHistoryDoc,
            //                                                 action.subName);
            // recentChatUsers.forEach((person) => {
            //     setOfExcludedUserIds.add(person.userId);
            // })
            setOfExcludedUserIds.add(action.currUserId);

            const searchResultOnline = await searchUserSubStringDB(action.subName);

            const profiles = searchResultOnline.filter((person) => !setOfExcludedUserIds.has(person.userId));
            return profiles
        }
        default: {
            throw new Error("search method reducer , Unknown Actoin: ", action.type);
        }
    }
}

const initialResult = [];

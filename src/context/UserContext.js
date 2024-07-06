import { createContext, useContext, useReducer } from "react";

const UserContext = createContext(null);

const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
    const [user, dispatch] = useReducer(
        userOperationReducer,
        initialUser
    );
    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}

export function useUserDispatcher() {
    return useContext(UserDispatchContext);
}

function userOperationReducer(user, action) {
    switch (action.type) {
        case 'getIn': {
            return {
                userId: action.userId,
                name: action.userName,
                profileLoc: action.profileLoc,
                emailId: action.emailId
            }
        }
        case 'logOut': {
            return {
                userId: null,
                name: null,
                profileLoc: null,
                emailId: null 
            }
        }
        default: {
            throw Error("Unknown action; " + action.type);
        }
    }
}

const initialUser = {
    userId: null,
    name: null,
    profileLoc: null,
    emailId: null
}
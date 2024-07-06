// all the db related functions

import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebase";
import { useId } from "react";
import { generateSearchableTerms } from "./helpers";

const userCollection = collection(db,'user');
const userIdSearchTerms = collection(db,'userSearchTerms');

//userDoc reference
const userDocRef = (userId) => {
    return doc(userCollection,userId);
}

const searchDocRef = (userId) => {
    return doc(userIdSearchTerms, userId);
}
// this will also create searchable terms {userId: ['ab','cd']}
const createUserDoc = async (userId, userData) =>  {
    //add or create new user row
    try {
        await setDoc(userDocRef(userId), userData);
        await setDoc(searchDocRef(userId), {terms : generateSearchableTerms(userData.userName)})  //userId is docRef
    }catch(err) {
        console.log("createUserDoc", err.message);
        throw new Error("there is an error in creating user user_id : ", userId);
    }
}

const getUserDoc = async (userId) => {
    try {
        const userSnap = await getDoc(userDocRef(userId));
        return userSnap.data();
    } catch (err) {
        console.log("error while getting sign in data", err);
        console.log(err.message);
        console.log(err.code);
    }
}

const searchUserSubStringDB = async (userSubName) => {
    try {
        const q = query(userIdSearchTerms, where('terms', 'array-contains', userSubName));
        const userIdsSnap = await getDocs(q);
        const usersMatched = []
        userIdsSnap.forEach( async (doc) => {
            const user = await getUserDoc(doc.id);
            usersMatched.push({...user, userId: doc.id});
        })
        return usersMatched;            
    } catch (err) {
        throw new Error("fireBaseDB", err)
    }
}

console.log(await searchUserSubStringDB('rah')); 

export {createUserDoc, getUserDoc, searchUserSubStringDB};

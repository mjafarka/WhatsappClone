// all the db related functions

import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useId } from "react";

const userCollection = collection(db,'user');

//userDoc reference
const userDocRef = (userId) => {
    return doc(userCollection,userId);
}

const createUserDoc = async (userId, userData) =>  {
    //add or create new user row
    await setDoc(userDocRef(userId), userData).then(() => {
        console.log("row created for user_id ", userId )
    }).catch((err) =>  {
        throw new Error("user doc not created for user : ", userId``)
    });
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

export {createUserDoc, getUserDoc};

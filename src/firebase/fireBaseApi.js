import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "./firebase"
import { addDoc, collection } from "firebase/firestore";


//new user
export const signUp = async (userData) => {
    console.log("emailId : ", userData.emailid, "  ; password : ", userData.password);
    createUserWithEmailAndPassword(auth,userData.emailid,userData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.uid);
        })
        .catch((err) => {
            console.log("err is", err);
            const errCode = err.code;
            const errorMessage = err.message;
            console.log(errCode, errorMessage);
        })
    
}

//existing user
export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            const errCode = error.code;
            const errMessage = error.message;
            console.log(errCode,errMessage);
        })
}

export const signOutUser = () => {
    signOut(auth).then(() => {
        console.log('Signed out');
    })
    .catch((error) => {
        console.log(error);
    })
}

//api to add user date while sign up
export const addUserData = async (userData) => {
    try {
        const docRef = await addDoc(collection(db, "user"), {
            userId: 1,
            username: userData.userName,
            emailid: userData.emailId,
            profileloc: userData.profileLoc
        }); 
        console.log("New user added with id: ", docRef.id);
    } catch (error) {
        console.log("Error adding new user ", error)
    }
    console.log("come here")
}
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "./firebase"
import { addDoc, collection } from "firebase/firestore";
import { createUserDoc, getUserDoc } from "./firebaseDB";

//new user
export const signUp = async (userData) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, userData.emailId, userData.password);

        const loggedUser = userCredential.user;

        await createUserDoc(loggedUser.uid, {
            userName: userData.userName,
            emailId: userData.emailId,
            profileLoc: userData.profileLoc
        });

        return {
            userId: loggedUser.uid,
            userName: userData.userName,
            emailId: userData.emailId,
            profileLoc: userData.profileLoc
        };
    } catch (err) {
        console.log(" err during sign up : ", err)
        const errCode = err.code;
        const errMessage = err.message;
        console.log(errCode, errMessage);
    }
    return null;
    
}

//existing user
export const signIn = async (email, password) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth,email,password);
        const loggedUser = userCredential.user;
        let userDocs = await getUserDoc(loggedUser.uid);
        return {userId: loggedUser.uid, ...userDocs};
    } catch (err) {
        throw new Error("error in sign in , ", err);
    }
    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         console.log(user);
    //     })
    //     .catch(error => {
    //         const errCode = error.code;
    //         const errMessage = error.message;
    //         console.log(errCode,errMessage);
    //     })
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
}
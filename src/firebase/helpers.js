import { getDoc } from "firebase/firestore";

//it will generate list which contains all the posible search of word
export const generateSearchableTerms = (name) => {
    const terms = [];
    const loweredName = name.toLowerCase();
    for (let i = 0 ; i < loweredName.length ; i++){
        for (let j = i + 1 ; j < loweredName.length ; j++){
            terms.push(loweredName.substring(i,j));
        }
    }
    return terms;
}
/**
 * 
 * @param {any} recentHistoryRef 
 * @param {string} subName 
 * @returns {Array} recentChatArray
 */
export const getRecentChatUsers = async (recentHistoryRef, subName) => {
    try {
        const docRef = await getDoc(recentHistoryRef);
        
        let searchResult = [];

        if (docRef.exists()) {
            searchResult =  docRef.data().chatPartners.filter(partner => {
                return partner.userName.toLowerCase().includes(subName)
            })
        } else {
            console.log("error in searching partners");
        }

        return searchResult;
    } catch (err) {
        throw new Error("error in getting Recent Chat user", err.message)
    }
}
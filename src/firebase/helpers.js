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
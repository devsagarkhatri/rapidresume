//saving new item  -> we create using the createContainer

import { doc, setDoc, getDocs, collection, query } from "firebase/firestore";
import { firestore } from "../firebase.config";
let tempData = {
    id: "Pfcl0fv3faf55gZK99utheBEQQN2",
    school: "samesamesamesamesamesame",
    college: "samesamesamesamesamesame",
    name: "samesamesame",
    previousExperience: "samesamesamesamesamesamesame",
};
export const saveUser = async (data) => {
    console.log("happennig");
    await setDoc(doc(firestore, "users", data), tempData, {
        merge: true,
    });
    return;
};

// tutorial 04:23:00

export const getAllUsers = async () => {
    const items = await getDocs(query(collection(firestore, "users")));
    return items.docs.map((doc) => doc.data());
};

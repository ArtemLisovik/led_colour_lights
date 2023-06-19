import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {integrateImageRefToCard} from 'helpers/getImage'
import {db, storage} from 'config/firebase'

export const getSpecials = createAsyncThunk('products/specials', async (_, {getState}) => {
    const resultRef = doc(db, "pages", "main");
    const docSnap = await getDoc(resultRef);

    const newResult = await integrateImageRefToCard(docSnap.data()?.SPECIAL, 'specials')
    return newResult

})




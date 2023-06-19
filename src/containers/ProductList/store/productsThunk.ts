import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore"; 
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {integrateImageRefToCard} from 'helpers/getImage'

import { db } from 'config/firebase'

export const getNews = createAsyncThunk('products/getNews', async (path: string, {getState}) => {
    const resultRef = doc(db, "pages", "main")
    const docSnap = await getDoc(resultRef)

    const newResult = await integrateImageRefToCard(docSnap.data()?.[path], 'products')
    return newResult

})





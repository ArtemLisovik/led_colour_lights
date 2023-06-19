import { ref, getDownloadURL } from "firebase/storage";
import { storage } from 'config/firebase'

import {ProductType} from 'types/types'


export const getImage = async (path:string) => {
    try {
        const wishesRef = ref(storage, path)
        const avatarRef = await getDownloadURL(wishesRef) 
        return avatarRef
    }
    catch (error) {
        return null
    }
}

export const integrateImageRefToCard = async (array: Partial<ProductType>[], path: string) => {
    const newProducts = await Promise.all(array.map(async (product: Partial<ProductType>) => {
        const image = await getImage(`${path}/${product.id}.jpg`);

        return {
            ...product, 
            image: image
        };
    }));
    return newProducts;
};





// export const integrateImageRefToCard = (array: Partial<ProductType>[]) => {
//     const newProducts = array.map(async (product: Partial<ProductType>) => {
//         const image = await getImage(`products/${product.id}.jpg`)
//         console.log(image)

//         return {
//         ...product, 
//         image: image
//         }
//     })

//     console.log(newProducts)
//     return newProducts
// }
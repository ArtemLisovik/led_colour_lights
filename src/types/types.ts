export type ProductType = {
    name: string,
    id: string,
    description: string,
    oldPrice?: string,
    newPrice: any,
    image: string,
    options?: [],
    length?: Array<string>,
    colors?: [],
    avatars?: [],
    count?: number
}
export type ProductType = {
    name: string,
    id: string,
    description: string,
    oldPrice?: string,
    newPrice: string,
    image: string,
    options?: []
}
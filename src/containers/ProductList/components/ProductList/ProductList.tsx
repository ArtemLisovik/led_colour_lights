import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import './ProductList.scss'


import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from 'config/firebase'
import { integrateImageRefToCard } from 'helpers/getImage';

// import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
// import { getNews } from '../../store/productsThunk'

type ProductList = {
    title: string,
    path: string,
    database: 'products' | 'specials'
}

export const ProductList = ({title, path, database}: ProductList) => {

    const [products, setProducts] = useState<any>()

    useEffect(() => {

      const func = async () => {
        const resultRef = doc(db, "pages", "main")
        const docSnap = await getDoc(resultRef)
    
        const newResult = await integrateImageRefToCard(docSnap.data()?.[path], database)
        setProducts(newResult)
      }
      func()
    },[])

    console.log(products)
    const productsNews = products?.map((product: any, index: any) => (
        <ProductItem 
        key={index}
        name={product.name} 
        oldPrice={product.oldPrice} 
        newPrice={product.newPrice} 
        description={product.description}
        id={product.id}
        image={product.image}/>
    ))

  return (
    <section className="new">
    <div className="container">
      <h2 className="new__title cards__title">{title}</h2>
      <div className="new__cards cards">

      {productsNews}

      </div>
    </div>
  </section>
  )
}

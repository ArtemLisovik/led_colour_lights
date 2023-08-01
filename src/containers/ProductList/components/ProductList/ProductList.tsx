import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import './ProductList.scss'


import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from 'config/firebase'
import { integrateImageRefToCard } from 'helpers/getImage';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/FilterSlice';
import { useAppSelector } from 'hooks/useRedux';

type ProductList = {
  title?: string,
  category?: string,
  database: 'products' | 'specials'
  filter?: boolean,
  path1?: string,
  path2?: string
}

export const ProductList = ({ title, category, database, filter, path1 }: ProductList) => {

  const [products, setProducts] = useState<any>({ candles: '' })

  useEffect(() => {

    const func = async () => {

      if (category) {
        const resultRef = doc(db, path1 as string, category as string)
        const docSnap = await getDoc(resultRef)
        setProducts({ [category as any]: docSnap.data() })
      }

      else {
        let products: any = {}
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach(async (doc) => {
          products = { ...products, [doc.id]: doc.data() }
        });
        setProducts(products)
      }
    }

    func()
  }, [])

  return (
    <section
      style={filter ? { marginTop: '-250px', position: 'relative', zIndex: '50' } : {}}
      className="new">
      <div className="container">
        <h2 className="new__title cards__title">{title}</h2>
        <div className="new__cards cards">

          {filter && <div className="products__filter filter">
            <ul className="filter__list">
              <li className="filter__item">
                <a href="./index.html" className="filter__link">Home</a>
              </li>
              <li className="filter__item">/
                <a href="" className="filter__link">SkinCare</a>
              </li>
              <li className="filter__item">/
                <a href="" className="filter__link">Beauty</a>
              </li>
            </ul>
            <h3 className="filter__title">SHOP BY PRODUCT
            </h3>
            <button className="filter__button">Day cream</button>
            <button className="filter__button">Night cream</button>
            <button className="filter__button">Sun protection</button>

          </div>}

          {

            products[category as any] ?
              Object.values(products[category as any])
                .map((product: any, index: any) => {
                  return (
                    <ProductItem
                      key={index}
                      name={product.name}
                      oldPrice={product.oldPrice}
                      newPrice={product.newPrice}
                      description={product.description}
                      id={product.id}
                      image={product.image}
                      options={product.options}
                    />
                  )
                })

              : Object.values(products)
                .map((categories: any) => {
                  return Object.values(categories).map((product: any, index: any) => {
                    return (
                      <ProductItem
                      key={index}
                      name={product.name}
                      oldPrice={product.oldPrice}
                      newPrice={product.newPrice}
                      description={product.description}
                      id={product.id}
                      image={product.image}
                      options={product.options}
                    />
                    )
                  })
                })
          }

        </div>
      </div>
    </section>
  )
}

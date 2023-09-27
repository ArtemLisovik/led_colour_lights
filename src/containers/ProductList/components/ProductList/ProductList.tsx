import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import './ProductList.scss'


import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from 'config/firebase'
import { ProductType } from 'types/types';
import { Link, useParams } from 'react-router-dom';


type ProductList = {
  title?: string,
  category?: string,
  database: 'products' | 'specials'
  filter?: boolean,
  path1?: string,
  path2?: string,
  subcategory?: string
}


export const ProductList = ({ title, category, database, filter, path1, subcategory }: ProductList) => {
  const [products, setProducts] = useState<any>({ candles: '' })


  useEffect(() => {
    const func = async () => {

      if (category) {
        const resultRef = doc(db, path1 as string, category as string)
        const docSnap = await getDoc(resultRef)
        if (subcategory) {
          setProducts({ [subcategory ? subcategory : category as any]: docSnap.data()?.[subcategory as any] })
        }

        else {
          setProducts({ [category as any]: docSnap.data() })
        }
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
  }, [category, subcategory])


  const cat = useParams().category
  const subCat = useParams().subcategory


  return (
    <section
      style={filter ? { marginTop: '-250px', position: 'relative', zIndex: '50' } : {}}
      className="new">
      <div className="container">
        <h2 className="new__title cards__title">{title}</h2>
        <div className="new__cards cards">

          {filter && <div className="products__filter filter">
            <ul className="filter__list">
              {/* <li className="filter__item">
                <Link to="./index.html" className="filter__link">Home</Link>
              </li> */}
              <li className="filter__item">
                <Link to={`/catalogue/${cat}`} className="filter__link">{cat}</Link>
              </li>
              {subCat && <li className="filter__item">
                <Link to={`/${cat}/${subCat}`} className="filter__link">/ {subCat}</Link>
              </li>}
            </ul>
            <h3 className="filter__title">SHOP BY PRODUCT
            </h3>
            <button className="filter__button">Day cream</button>
            <button className="filter__button">Night cream</button>
            <button className="filter__button">Sun protection</button>

          </div>}

          {
            Object.values(Object.values(products)[0] as any).map((product: any, index: number) => {
              const params = {...product, path: `${cat}/${subCat}`};

              return (
                <ProductItem
                  {...params}
                  key={index}
                  />
          )
           })}
        </div>
      </div>
    </section>
  )
}

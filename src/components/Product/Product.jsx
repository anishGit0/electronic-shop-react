import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

import Image1 from "../../assets/product/p-1.jpg"
import Image2 from "../../assets/product/p-2.jpg"
import Image3 from "../../assets/product/p-3.jpg"
import Image4 from "../../assets/product/p-4.jpg"
import Image5 from "../../assets/product/p-5.jpg"
import Image6 from "../../assets/product/p-7.jpg"
import Image7 from "../../assets/product/p-9.jpg"
import Image8 from "../../assets/product/p-2.jpg"

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Boat Headphone",
        price: "1200",
        aosDelay: "0"
    },
    {
        id:2,
        img: Image2,
        title: "Rocky Mountain",
        price: "2200",
        aosDelay: "300"
    },
    {
        id: 3,
        img: Image3,
        title: "Goggles",
        price: "500",
        aosDelay: "500"
    },
    {
        id: 4,
        img: Image4,
        title: "Printed",
        price: "2000",
        aosDelay: "400"
    }
]

const ProductsData2 = [
    {
        id: 1,
        img: Image5,
        title: "Boat Headphone",
        price: "1200",
        aosDelay: "0"
    },
    {
        id:2,
        img: Image6,
        title: "Rocky Mountain",
        price: "2200",
        aosDelay: "300"
    },
    {
        id: 3,
        img: Image7,
        title: "Goggles",
        price: "500",
        aosDelay: "500"
    },
    {
        id: 4,
        img: Image8,
        title: "Printed",
        price: "2000",
        aosDelay: "400"
    }
]

function Product() {
  return (
    <div className=''>
        <div className="container">
            {/* header section */}
            <div className="grid grid-cols-1 mb-5">
                <Heading title={"Our Products"} subtitle={"Explore Our Products"}/>
            </div>
            {/* Body section */}
            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData2} />
        </div>
    </div>
  )
}

export default Product
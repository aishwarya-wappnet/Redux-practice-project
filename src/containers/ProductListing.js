 import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions'
 
 const ProductListing = () => {

  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Err", err);
    })
    // console.log(response.data);
    dispatch(setProducts(response.data));
  }
  useEffect(() => { 
    fetchProducts()
  }, [])
  console.log(products) 
   return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
   )
 }
 
 export default ProductListing
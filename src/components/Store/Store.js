import banner from '../../assets/images/banner-welcome.svg';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Product from './Product.js';
import axios from 'axios';
import Navbar from '../Navbar.js';

export default function Store() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_HOST}/products`);
        request.then(r => {
            setProducts(r.data);
        });
        request.catch(() => {
            alert('algo deu errado.');
        });
    }, []);

    return (
        <StoreBody>
            <Navbar />
            <Banner src={banner} alt="banner"/>
            <ProductsGrid>
                {products.map(product => {
                    return <Product
                                key = {product.id}
                                productId = {product.id}
                                name = {product.name} 
                                value = {product.value}
                                image = {product.image}/>
                })}
            </ProductsGrid>
        </StoreBody>
    );
}

const StoreBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Banner = styled.img`
    width: 90%;
    max-width: 1120px;
    margin-top: 50px;
`;

const ProductsGrid = styled.div`
    width: 90%;
    max-width: 1120px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;
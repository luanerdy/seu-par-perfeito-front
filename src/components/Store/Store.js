import banner from '../../assets/images/banner-welcome.png';
import logo from '../../assets/images/logo-icon.svg';
import { IoPersonSharp, IoCartSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Product from './Product.js';
import axios from 'axios';

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
            <TopBar>
                <div>
                    <Logo src={logo} alt="logo"/>
                    <MenuIcons>
                        <IoPersonSharp className="icon" />
                        <IoCartSharp className="icon" />
                    </MenuIcons>
                </div>
            </TopBar>
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
    padding: 0 20px;
`;

const TopBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    >div {
        height: 50px;
        width: 90%;
        max-width: 1120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const MenuIcons = styled.div`
    display: flex;
    align-items: center;
    .icon {
        font-size: 40px;
        margin-left: 5px;
        color: #432D71;
    }
`;

const Logo = styled.img`
    width: 48px;
`;

const Banner = styled.img`
    width: 100%;
    max-width: 1120px;
    margin-top: 80px;
`;

const ProductsGrid = styled.div`
    width: 100%;
    margin: 20px 20px;
    max-width: 1120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    *:nth-child(3n) {
        justify-self: end;
    }

    *:nth-child(3n - 1) {
        justify-self: center;
    }
`;
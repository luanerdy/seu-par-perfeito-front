import Navbar from '../Navbar';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CartProduct from './CartProduct';

export default function CartPage() {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const [cart, setCart] = useState();
    const { userId, token } = user;

    if (token === '') history.push("/login");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_HOST}/cart/${userId}`, config);
        request.then(r => {
            setCart(r.data);
        });
        request.catch(() => {
            alert('algo deu errado.');
        });
    }, []);

    //onClick esvaziar carrinho -> delete * from product_cart
    function emptyCart() {
        alert('esvaziar carrinho a ser implementado');
    }

    function checkout() {
        alert('checkout a ser implementado');
    }

    return (
        <>
            <Navbar />
            <Body>
                <Title><p>Este é seu carrinho de compras!</p></Title>
                <Cart>
                    {cart ? cart.map(e => <CartProduct product={e} />) : ''}
                </Cart>
                <Confirm>
                    <button className="empty" onClick = {emptyCart}>Esvaziar carrinho</button>
                    <button className="checkout" onClick = {checkout}>Finalizar compra</button>
                </Confirm>
            </Body>
        </>
    );
}

const Body = styled.div`
    margin: auto;
    margin-top: 80px;
    width: 90%;
    max-width: 1120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    margin-top: 15px;
    font-size: 40px;
    width: 70%;
    font-family: 'Berkshire Swash', cursive;
    color: #432D71;
    box-shadow: 0 1px rgba(0,0,0,0.1);
    text-align: center;
    p {
        margin-bottom: 15px;
    }
`;

const Cart = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Confirm = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
        color: #fff;
        width: 300px;
        height: 40px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
    }
    .empty {
        background-color: #CC0000;
    }
    .checkout {
        background-color: #00CC33;
    }
`;
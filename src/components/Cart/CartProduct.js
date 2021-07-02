import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function CartProduct({ product }) {
    const { id, name, value, description, image, quantity } = product;
    const [newQuantity, setNewQuantity] = useState(quantity);
    
    //onClick trash -> delete product from product_cart
    function deleteProduct() {
        alert('deletar produto a ser implementado')
    }
    //onClick qtd -> update product form product_cart
    function updateProduct() {
        alert('update de produto a ser implementado')
    }

    function subtract() {
        if (newQuantity > 1) {
            setNewQuantity(newQuantity - 1);
            //update into product_cart
        } else {
            deleteProduct();
        }
    }

    function add() {
        setNewQuantity(newQuantity + 1);
        //update into product_cart
    }

    return (
        <Box>
            <Details>
                <img src={image} alt="product" />
                <div>
                    <p className="name">{name}</p>
                    <p>{description}</p>
                </div>
            </Details>
            <Qtd>
                <p>quantidade</p>
                <div>
                    <span onClick = {subtract}>-</span>
                    <p>{newQuantity}</p>
                    <span onClick = {add}>+</span>
                </div>
            </Qtd>
            <FaTrashAlt className="trash-icon" onClick={deleteProduct}/>
        </Box>
    );
}

const Box = styled.div`
    height: 140px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .trash-icon {
        font-size: 30px;
        color: #8271A7;
        cursor: pointer;
    }
`;

const Details = styled.div`
    display: flex;
    font-family: 'Roboto';
    font-size: 14px;
    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
    div {
        width: 350px;
        margin-left: 20px;
    }
    .name {
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 35px;
    }
`;

const Qtd = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto';
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 30px;
            color: #8271A7;
            cursor: pointer;
        }
        p {
            font-weight: 700;
            font-size: 20px;
        }
    }
`;

/*
.color-primary-1 { color: #AFA3C8 }
.color-primary-2 { color: #8271A7 }
.color-primary-3 { color: #432D71 }
.color-primary-4 { color: #281453 }
*/
import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import {UserContext} from '../../contexts/UserContext.js';

export default function Modal({ setModal, product }) {
    const { user } = useContext(UserContext);
    const [quantity, setQuantity] = useState(1);
    const [wait, setWait] = useState(false);
    const { productId, name, value } = product;
    const { userId, token } = user;
    
    function PostProduct() {
        setWait(true);
        const body = {
            userId,
            productId,
            quantity
        };
        console.log(body);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const request = axios.post(`${process.env.REACT_APP_HOST}/cart`, body, config);
        request.then(() => {
            setModal(false);
            setQuantity(1);
            setWait(false);
        });
        request.catch(r => {
            alert('falha ao adicionar');
            setWait(false);
        });
    }

    return (
        <ModalBody>
            <ModalBox>
                <Info>
                   <span>{name}</span><span>R$ {(value/100).toString().replace('.',',')}</span>
                </Info>
                <Info>
                   <span>Quantidade:</span>
                   <div>
                       <button disabled={wait} onClick={() => {
                                if (quantity > 1) {
                                        setQuantity(quantity - 1)
                                } else {
                                        setModal(false)
                                }
                            }} className="btn">
                           -
                        </button>
                        {quantity}
                        <button disabled={wait} onClick={() => setQuantity(quantity + 1)} className="btn">+</button>
                    </div>
                </Info>
                <Info>
                   <span>Total:</span><span>R$ {(value*quantity/100).toString().replace('.',',')}</span>
                </Info>
                <Confirm wait={wait.toString()}>
                    <button disabled={wait} onClick={() => setModal(false)}>Cancelar</button>
                    <button disabled={wait} onClick={PostProduct}>Confirmar</button>
                </Confirm>
            </ModalBox>
        </ModalBody>
    );
}

const ModalBody = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
    padding: 40px;
    height: 300px;
    width: 500px;
    background-color: #432D71;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

const Info = styled.p`
    color: #fff;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    >div {
        display: flex;
        justify-content: space-between;
        width: 110px;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 30px;
        background-color: #281453;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
    }
`;

const Confirm = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    button {
        cursor: pointer;
        width: 180px;
        height: 50px;
        border-radius: 5px;
        font-size: 20px;
        background-color: ${props => props.wait === 'true' ? '#AFA3C8' : '#281453'};
        color: #fff;
    }
`;
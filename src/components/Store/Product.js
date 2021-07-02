import styled from 'styled-components';
import { TiShoppingCart } from 'react-icons/ti';
import { useState } from 'react';
import Modal from './Modal.js';

export default function Product({ productId, name, value, image }) {
	const [modal, setModal] = useState(false);
	//setModal(true) //teste
	//to add cart -> userId, productId, quantity
	return (
		<Card>
			<img src={image} alt="product" />
			<Bar>
				<Info>
					<Name>{name}</Name>
					<Value>
						R$ {(value / 100).toFixed(2).replace('.', ',')}
					</Value>
				</Info>
				<CartBtn onClick={() => setModal(true)}>
					<TiShoppingCart className="cart" />
				</CartBtn>
			</Bar>
			{modal ? (
				<Modal
					setModal={setModal}
					product={{ productId, name, value }}
				/>
			) : (
				''
			)}
		</Card>
	);
}

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	height: 400px;
	margin-bottom: 20px;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	img {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 1px rgba(0, 0, 0, 0.3);
		height: 300px;
		width: 100%;
		object-fit: cover;
	}
`;

const Bar = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	font-size: 10px;
	padding-left: 3px;
`;

const Info = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Name = styled.div`
	margin-top: 3px;
	color: black;
	font-size: 21px;
`;

const Value = styled.div`
	font-weight: 700;
	font-size: 25px;
	color: #281453;
`;

const CartBtn = styled.button`
	background-color: #281453;
	width: 100px;
	height: 100%;
	border-bottom-right-radius: 10px;
	cursor: pointer;
	.cart {
		color: #fff;
		font-size: 60px;
	}
`;

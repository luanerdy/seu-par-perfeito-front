import Navbar from '../Navbar';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CheckoutProduct from './CheckoutProduct';

export default function CartPage() {
	const { user } = useContext(UserContext);
	const history = useHistory();
	const [cart, setCart] = useState();
	const { userId, token } = user;

	if (token === '') history.push('/login');

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		const request = axios.get(
			`${process.env.REACT_APP_HOST}/cart/${userId}`,
			config
		);
		request.then((r) => {
			setCart(r.data);
		});
		request.catch(() => {
			alert('algo deu errado.');
		});
	}, []);

	function gocart() {
        history.push('/cart');
    }

	return (
		<>
			<Navbar />
			<Body>
				<Title>
					<p>Finalize sua compra!</p>
				</Title>
				<Cart>
					{cart ? cart.map((e) => <CheckoutProduct product={e} />) : ''}
				</Cart>
				<Confirm>
					<div className="total-price">
					<p>
						Total: R${' '}
						{cart
							? (
									cart
										.map((p) => p.value * p.quantity)
										.reduce((acc, cur) => acc + cur, 0) /
									100
							  )
									.toFixed(2)
									.replace('.', ',')
							: ''}
					</p>
                    <button className="goback" onClick={gocart}>Voltar ao carrinho</button>
					</div>
					<button className="checkout">Finalizar compra</button>
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
	color: #432d71;
	box-shadow: 0 1px rgba(0, 0, 0, 0.1);
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
	align-items: center;
	margin-top: 10px;

	p {
		color: #432d71;
		font-size: 24px;
		font-weight: 700;
	}

	button {
		color: #fff;
		width: 300px;
		height: 40px;
		border-radius: 10px;
		font-weight: 700;
		cursor: pointer;
	}
	.total-price {
		display: flex;
		align-items: center;
		
		.goback {
			background-color: #432D71;
			margin-left: 20px;
		}
	}
	.empty {
		background-color: #cc0000;
	}

    
	.checkout {
		background-color: #00cc33;
	}
`;

import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function CartProduct({ product }) {
	const { id, name, value, description, image, quantity } = product;
	const [newQuantity, setNewQuantity] = useState(quantity);

	return (
		<Box>
			<Details>
				<img src={image} alt="product" />
				<div>
					<p className="name">
						<span>{newQuantity}X </span> {name}
					</p>
					<p>{description}</p>
				</div>
			</Details>
		</Box>
	);
}

const Box = styled.div`
	height: 140px;
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	.trash-icon {
		font-size: 30px;
		color: #8271a7;
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

		span {
			color: #432d71;
			font-size: 24px;
		}
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
			color: #8271a7;
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

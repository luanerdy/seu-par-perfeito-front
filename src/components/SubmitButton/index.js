import Loader from 'react-loader-spinner';
import { StyledButton } from './styles';

const SubmitButton = (props) => {
	return (
		<StyledButton type="submit" {...props}>
			{props.disabled ? (
				<Loader type="ThreeDots" color="#fff" height={45} width={60} />
			) : (
				props.children
			)}
		</StyledButton>
	);
};

export { SubmitButton };

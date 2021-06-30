import axios from 'axios';
import logoIcon from '../assets/images/logo-icon.svg';
import logoHorizontal from '../assets/images/logo-horizontal.svg';
import shoes from '../assets/images/shoes.jpg';
import { AuthPage } from '../styles/auth';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUpPage = () => {
	const [disabled, setDisabled] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		setDisabled(true);

		if (password !== confirmPassword) {
			setDisabled(false);
			return alert('Os campos de senha devem ser iguais');
		}

		const user = {
			name,
			email,
			password
		}

		axios
			.post('http://localhost:4000/auth/signup', user)
			.then((res) => {
				history.push("/login");
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
				setDisabled(false);
			});
	};

	return (
		<AuthPage>
			<aside>
				<div className="background bg-wall"></div>
				<img className="background bg-image" src={shoes} alt="Shoes" />
				<img src={logoIcon} alt="Logo" />
				<p>
					Encontre aqui <br />
					<span>o seu verdadeiro</span> <br />
					par perfeito
				</p>
			</aside>
			<main>
				<img src={logoHorizontal} alt="Logo" />
				<Form disabled={disabled} onSubmit={handleSubmit}>
					<Input
						minLength="3"
						placeholder="Digite seu nome"
						required
						type="text"
						value={name}
						setValue={setName}
					/>
					<Input
						placeholder="Digite seu email"
						required
						type="email"
						value={email}
						setValue={setEmail}
					/>
					<Input
						minLength="6"
						placeholder="Digite sua senha"
						required
						type="password"
						value={password}
						setValue={setPassword}
					/>
					<Input
						minLength="6"
						placeholder="Confirme sua senha"
						required
						type="password"
						value={confirmPassword}
						setValue={setConfirmPassword}
					/>
					<SubmitButton>Cadastrar</SubmitButton>
				</Form>
				<p>
					Já possui uma conta? <Link to="/login">Faça login!</Link>
				</p>
			</main>
		</AuthPage>
	);
};

export { SignUpPage };

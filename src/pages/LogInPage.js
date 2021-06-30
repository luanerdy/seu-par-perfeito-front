import logoIcon from '../assets/images/logo-icon.svg';
import logoHorizontal from '../assets/images/logo-horizontal.svg';
import shoes from '../assets/images/shoes.jpg';
import { AuthPage } from '../styles/auth';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { useState } from 'react';

const LogInPage = () => {
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
				<Form disabled={disabled}>
					<Input
                        placeholder="Digite seu email"
						required
						type="email"
						value={email}
						setValue={setEmail}
					/>
					<Input
                        placeholder="Digite sua senha"
						required
						type="password"
						value={password}
						setValue={setPassword}
					/>
                    <SubmitButton>Entrar</SubmitButton>
				</Form>
                <p>Primeira vez no site? <a href="#">Cadastre-se!</a></p>
			</main>
		</AuthPage>
	);
};

export { LogInPage };

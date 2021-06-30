import styled from 'styled-components';

const AuthPage = styled.div`
	display: flex;
	height: 100vh;

	aside {
		flex: 8;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		position: relative;

		.background {
			object-fit: cover;
			position: absolute;
			width: 100%;
			height: 100%;
            margin: 0;
		}

		.bg-wall {
            filter: sepia(80%) hue-rotate(170deg) brightness(95%);
			background-color: rgba(255, 255, 255, .85);
			z-index: 10;
		}

		.bg-image {
            opacity: 100%;
            filter: grayscale(50%);
		}

		*:not(.background) {
			position: relative;
			z-index: 20;
		}

		img {
			width: 200px;
            margin-bottom: 30px;
		}

		p {
			font: 400 36px 'Berkshire Swash', serif;
			text-align: center;
            color: #281453;

            span {
                color: #5f4b8b;
            }
		}
	}

	main {
		flex: 7;
        display flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        background-color: #fff;

        img {
            width: 50%;
            max-width: 330px;
            margin-bottom: 30px;
        }

        form {
            width: 50%;
            max-width: 330px;
        }

        p {
            margin-top: 30px;
            color: #281453;
            font-weight: bold;
        }
	}
`;

export { AuthPage };

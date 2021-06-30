import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;

    width: 100%;
    height: 46px;
    margin: 6.5px 0;
    border-radius: 5px;
    border: none;
    background-color: #5f4b8b;
    color: white;
    font-family: inherit;
    font-weight: 700;
    font-size: 20px;

    &:disabled {
        opacity: 70%;
    }
`;

export { StyledButton };
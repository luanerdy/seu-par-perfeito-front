import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Admin() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [wait, setWait] = useState(false);

    function submit(e) {
        e.preventDefault();
        setWait(true);
        const body = {
            name,
            value,
            description,
            image
        }
        const request = axios.post(`${process.env.REACT_APP_HOST}/products`, body);
        request.then(() => {
            setWait(false);
            setName('');
            setValue('');
            setDescription('');
            setImage('');
            alert('produto inserido com sucesso');
        });
        request.catch(r => {
            alert('algo deu errado');
            setWait(false);
        })
    }

    return (
        <Form onSubmit={submit}>
            <Title>Adicionar Produto</Title>
            <Input disabled={wait} required placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
            <Input disabled={wait} required placeholder="Valor" type="number" value={value > 0 ? parseInt(value)/100 : ''} onChange={e => setValue(Number(e.target.value.replace(',','.')).toFixed(2)*100)}/>
            <Input disabled={wait} required placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
            <Input disabled={wait} required placeholder="Link da imagem" value={image} onChange={e => setImage(e.target.value)}/>
            <SubmitBtn>Submit</SubmitBtn>
        </Form>
    );
};

const Title = styled.div`
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #432D71;
    width: 100%;
    height: 100vh;
`;

const Input = styled.input`
    width: 500px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;
`;

const SubmitBtn = styled.button`
    font-size: 30px;
    color: #fff;
    width: 500px;
    height: 50px;
    border-radius: 10px;
    background-color: #8271A7;
    cursor: pointer;
`;
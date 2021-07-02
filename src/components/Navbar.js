import styled from 'styled-components';
import logo from '../assets/images/logo-icon.svg';
import { IoPersonSharp, IoCartSharp, IoLogOut } from 'react-icons/io5';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { user } = useContext(UserContext);
    const { name } = user;

    function logout() {
        alert('logout a ser implementado')
    }

    return (
        <TopBar>
            <div>
                <Link to={"/"}><Logo src={logo} alt="logo"/></Link>
                <MenuIcons>
                    {name === '' ? '' : <p>Olá, {name}</p>}
                    <Link to={name === '' ? "/login" : "/"}><IoPersonSharp className="icon" /></Link>
                    <Link to="/cart"><IoCartSharp className="icon" /></Link>
                    {name === '' ? '' : <IoLogOut className="icon" onClick={logout}/>}
                </MenuIcons>
            </div>
        </TopBar>
    );
}

const TopBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    >div {
        height: 50px;
        width: 90%;
        max-width: 1120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Logo = styled.img`
    width: 48px;
`;

const MenuIcons = styled.div`
    display: flex;
    align-items: center;
    .icon {
        font-size: 40px;
        margin-left: 5px;
        color: #432D71;
        cursor: pointer;
    }
    p {
        margin-right: 20px;
        font-family: 'Berkshire Swash', cursive;
    }
`;
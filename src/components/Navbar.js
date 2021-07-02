import styled from 'styled-components';
import logo from '../assets/images/logo-icon.svg';
import { IoPersonSharp, IoCartSharp } from 'react-icons/io5';

export default function Navbar() {
    return (
        <TopBar>
            <div>
                <Logo src={logo} alt="logo"/>
                <MenuIcons>
                    <IoPersonSharp className="icon" />
                    <IoCartSharp className="icon" />
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
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 1px rgba(0,0,0,0.1);
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
    width: 30px;
`;

const MenuIcons = styled.div`
    display: flex;
    align-items: center;
    .icon {
        font-size: 25px;
        margin-left: 5px;
        color: #432D71;
    }
`;
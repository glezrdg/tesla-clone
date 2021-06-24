import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                   <a key={index} href="#" alt="model s">{car}</a> 
                ))}
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick={() => setBurgerStatus(true)}>Menu</a>
                
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)} /> 
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                   <li><a key={index} href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    img {
        padding-left: 28px;
        padding-top: 0px;
        width: 11vw;
        height: 2.4vh;
        opacity: 0.85;
    }
`
const Menu = styled.div`
    
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a {
        font-weight: 500;
        padding: 10px 17.5px;
        flex-wrap: nowrap;
    }
    a:hover{
        background: rgba(0,0,0,0.08727240896358546);
        border-radius: 20px;
    }
    @media (max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-size: 0.95rem;
        font-weight: 500;
        padding: 10px 15px;
    }
    a:hover{
        background: rgba(0,0,0,0.08727240896358546);
        border-radius: 20px;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.95;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s;
    
    

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a {
            font-weight: 600;

        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

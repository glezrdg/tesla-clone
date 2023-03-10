import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    
    return (
        <Wrap bgImage={ backgroundImg }>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        { rightBtnText && 

                            <RightButton>
                                {rightBtnText}
                            </RightButton>

                        }                   
                    </ButtonGroup>  
                    <KeyboardArrowDownIcon fontSize="large" />
                </Fade>
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: start;
    align-items: center;
    background-image: ${ props => `url("/images/${props.bgImage}")` };
    
    
    
`
const ItemText = styled.div`
    
    padding-top: 17vh;
    text-align: center;
    h1 {
        font-size: 2.8rem;
        font-weight: 500;
    }
    p {
        font-weight: 300;
    }

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.99);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const Buttons = styled.div`

`
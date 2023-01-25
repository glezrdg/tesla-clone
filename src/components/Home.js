import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'

function Home() {
    return (
        <Container>
            <Header />
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Lowes Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
               
            />
            <Footer>
                <ul>
                    <li>Tesla © 2021</li>
                    <li>Privacy & Legal</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Get Newsletter</li>
                    <li>News</li>
                    <li>Forums</li>
                    <li>Locations</li>
                </ul>
            </Footer>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
    
`
const Footer = styled.div`
   ul{
        
        display: flex;
        list-style: none;
        padding: 0 2.5vw 5vh 2.5vw;
        font-size: 0.8rem;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
   }
   li{
       cursor: pointer;
       margin: 0 10px
       
   }

    
`
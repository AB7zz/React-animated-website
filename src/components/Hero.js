import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import PlanetOne from '../images/planet-1.svg'
import PlanetTwo from '../images/planet-2.svg'
import PlanetThree from '../images/planet-3.svg'
import PlanetFour from '../images/planet-4.svg'
const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw-1300px)/2);

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    padding: 5rem 2rem;

    h1{
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    p{
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    background: transparent;
    cursor: pointer;
    outline: none;
    color: #fff;
`
const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1){
        top: 10px;
        left: 10px;
    }
    ${Image}:nth-child(2){
        top: 170px;
        left: 20px;
    }
    ${Image}:nth-child(3){
        top: 350px;
        left: 150px;
    }
    ${Image}:nth-child(4){
        bottom: 340px;
        left: 255px;
    }
`

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100},
        visible: {opacity: 1, x: 0}
    }
    const fade = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }
    return(
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                    variants={fade}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 1}}
                    >
                    Welcome to Space</motion.h1>
                    <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 1}}
                    >
                    Journey to the unkown</motion.p>
                    <Button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color: '#000'}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration: 1.5}}}
                    >
                    Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={PlanetOne} alt='planet-1' 
                    whileTap={{scale: 0.9}}
                    drag={true}
                    dragConstraints={{left: 0, 
                        right: 250, 
                        top: 0, 
                        bottom: 50}}
                    />
                    <Image src={PlanetTwo} alt='planet-3' 
                    whileTap={{scale: 0.9}}
                    drag={true}
                    dragConstraints={{left: 0, 
                        right: 250, 
                        top: 0, 
                        bottom: 50}}
                    />
                    <Image src={PlanetThree} alt='planet-2' 
                    whileTap={{scale: 0.9}}
                    drag={true}
                    dragConstraints={{left: 0, 
                        right: 250, 
                        top: 0, 
                        bottom: 50}}
                    />
                    <Image src={PlanetFour} alt='planet-4' 
                    whileTap={{scale: 0.9}}
                    drag={true}
                    dragConstraints={{left: 0, 
                        right: 150, 
                        top: 70, 
                        bottom: 0}}
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero

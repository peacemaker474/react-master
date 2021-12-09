import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, .06);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    position: absolute;
    top: 100px;
`;

const boxVariants = {
    entry: (back: boolean) => ({
        x: back ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
        }
    },
    exit: (back:boolean) => ({
        x: back ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.7,
        }
    })
}

function Slider () {
    const [visible, setVisible] = useState(2);
    const [back, setBack] = useState(false);
    const nextPlease = () => {
        setBack(false);
        setVisible(prev => prev === 9 ? 9 : prev + 1);
    }
    const prevPlease = () => {
        setBack(true);
        setVisible(prev => prev === 1 ? 1 : prev - 1);
    }
    return (
        <Wrapper>
            <AnimatePresence custom={back}>
                <Box custom={back} variants={boxVariants} initial="entry" animate="center" exit="exit" key={visible}> {visible} </Box>
            </AnimatePresence>
            <button onClick={prevPlease}> prev </button>
            <button onClick={nextPlease}> next </button>
        </Wrapper>
    )
}

export default Slider;
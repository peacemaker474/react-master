import styled from 'styled-components';
import {motion} from 'framer-motion';

const Box = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, .06);
`;

const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    place-self: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, .06);
`;

const boxVariants = {
    start: {
        opactiy: 0,
        scale: 0.5,
    },
    end: {
        opactiy: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.4
        }
    }
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10
    },
    end: {
        opacity: 1,
        y: 0
    }
};

function Variants () {
    return (
        <Box variants={boxVariants} initial="start" animate="end">
            <Circle variants={circleVariants} />
            <Circle variants={circleVariants} />
            <Circle variants={circleVariants} />
            <Circle variants={circleVariants} />
        </Box>
    )
}

export default Variants;
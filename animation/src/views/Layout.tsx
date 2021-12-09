import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 10px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
    
`;

const Box = styled(motion.div)`
    height: 200px;
    background-color: white;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, .06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Layout () {
    const [id, setId] = useState<null|string>(null);

    const handleChangeId = (n: string) => () => {
        setId(n);
    }

    return (
        <Wrapper >
            <Grid>
                {["1", "2", "3", "4"].map(n => (
                    <Box onClick={handleChangeId(n)} key={n} layoutId={n}/>
                ))}
            </Grid>
            <AnimatePresence>
                {id ? 
                    <Overlay
                        onClick={() => setId(null)}
                        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        animate={{ backgroundColor: "rgba(0, 0, 0, .6)"}}
                        exit={{ backgroundColor: "rgba(0, 0, 0, 0)"}}
                    >
                        <Box layoutId={id} style={{ width: 400, height: 200}}/>
                    </Overlay>
                : null}
            </AnimatePresence>
        </Wrapper>
    )
}

export default Layout;
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Variants from './components/Variants';
import Gestures from './components/Gestures';
import Drag from './components/Drag';
import Scroll from './components/Scroll';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh;
`;

const AnimatioBox = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 30px;
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatioBox>
          <Variants />
          <Gestures />
          <Drag />
          <Scroll />
        </AnimatioBox>
      </Wrapper>
    </>
  )
}

export default App;

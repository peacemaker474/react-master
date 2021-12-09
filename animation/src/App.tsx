import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './views/Layout';
import Animation from './views/Animation';
import Slider from './views/Slider';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* <Animation /> */}
        {/* <Slider /> */}
        <Layout />
      </Wrapper>
    </>
  )
}

export default App;

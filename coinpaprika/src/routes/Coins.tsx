import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    margin-bottom: 10px;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.accentColor};
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        color: ${props => props.theme.textColor};
        transition: color .2s ease-in;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Loader = styled.span`
    display: block;
    text-align: center;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins () {
    const { isLoading, data  } = useQuery<ICoin[]>("allCoins", fetchCoins);
    const setIsDark = useSetRecoilState(isDarkAtom);
    const toggleDarkMode = () => setIsDark(prev => !prev);

    return (
        <Container>
            <Helmet>
                <title> 코인 </title>
            </Helmet>
            <Header>
                <Title> 코인 </Title>
                <button onClick={toggleDarkMode}> Toggle Mode </button>
            </Header>
            {isLoading ? (
                <Loader> Loading... </Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map(coin => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`} state={{name: coin.name}}>
                                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`} />
                                {coin.name} &rarr; 
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    )
}

export default Coins;
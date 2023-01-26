import styled from "styled-components";
import akvulcan from "../assets/img/ak47vulcan.png";
import butterflyLore from "../assets/img/butterfly-lore.png";
import m4a1printstream from "../assets/img/m4a1-printstream.png";
import m4a4howl from "../assets/img/m4a4howl.png";
const productsMock = [
  {
    name: "Ak-47 Vulcan",
    price: 599.99,
    image: akvulcan,
  },
  {
    name: "Butterfly Lore",
    price: 15799.99,
    image: butterflyLore,
  },
  {
    name: "M4A1 Printstream",
    price: 799.99,
    image: m4a1printstream,
  },
  {
    name: "M4A4 Howl",
    price: 1799.99,
    image: m4a4howl,
  },
  {
    name: "Ak-47 Vulcan",
    price: 599.99,
    image: akvulcan,
  },
  {
    name: "M4A1 Printstream",
    price: 799.99,
    image: m4a1printstream,
  },
];
export default function HomePage() {
  return (
    <StyledContainer>
      <StyledTopBar>
        <ion-icon name="menu-outline"></ion-icon>
        CSGO Skins
        <ion-icon name="bag-handle-outline"></ion-icon>
      </StyledTopBar>
      <StyledProductsContainer>
        {productsMock.map((p, i) => (
          <StyledProducts key={i}>
            <ion-icon name="bag-add-outline"></ion-icon>
            <img src={p.image} alt={p.name} />
            <h1>{p.name}</h1>
            <p>R$ {p.price}</p>
          </StyledProducts>
        ))}
      </StyledProductsContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #272d70;
`;
const StyledTopBar = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: #002448;
  z-index: 2;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  padding: 10px;
  top: 0px;
  justify-content: space-between;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #fbfbfb;
  ion-icon {
    font-size: 25px;
  }
`;

const StyledProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  margin-top: 80px;
  @media (min-height: 740px) {
    margin-bottom: 300px;
  }
  @media (min-height: 840px) {
    margin-bottom: 400px;
  }
  @media (min-height: 1000px) {
    margin-bottom: 950px;
  }
  @media (min-height: 1150px) {
    margin-bottom: 1000px;
  }
  @media (min-width: 1800px) {
    margin-bottom: 400px;
    width: 30%;
  }
`;

const StyledProducts = styled.div`
  width: 150px;
  height: 180px;
  position: relative;
  box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #002448;
  border-style: none;
  margin: 10px;
  ion-icon {
    position: absolute;
    right: 8px;
    bottom: 8px;
    color: #fbfbfb;
    font-size: 18px;
  }
  img {
    width: 120px;
    height: 80px;
    border-radius: 5px;
  }
  h1 {
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    margin-top: 10px;
    color: #fbfbfb;
  }
  p {
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    margin-top: 10px;
    color: #fbfbfb;
  }
`;

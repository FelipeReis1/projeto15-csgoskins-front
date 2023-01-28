import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import akvulcan from "../assets/img/ak47vulcan.png";
import butterflyLore from "../assets/img/butterfly-lore.png";
import m4a1printstream from "../assets/img/m4a1-printstream.png";
import m4a4howl from "../assets/img/m4a4howl.png";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

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
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   };
  //   const promise = axios.get("http://localhost:5000/products" ,config);
  //   promise.then((res) => {
  //     setProducts(res.data);
  //   });
  //   promise.catch((err) => {
  //     alert(err.data.message);
  //   });
  //   // eslint-disable-next-line
  // }, []);

  function addToCart() {
    if (!user) {
      return alert(
        "Você precisa estar logado para adicionar items ao carrinho!"
      );
    }
    const request = {
      name: products.name,
      price: products.price,
      image: products.image,
    };
    const promise = axios.post("http://localhost:5000/cart", request);
    promise.then(() => {
      navigate("/cart");
    });
    promise.catch((err) => {
      alert(err.data.message);
    });
  }

  return (
    <StyledContainer>
      <StyledSideBar isOpen={isOpen}>
        <StyledSidebarList>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <StyledSidebarListItem>Home</StyledSidebarListItem>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <StyledSidebarListItem>Login</StyledSidebarListItem>
          </Link>
          <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
            <StyledSidebarListItem>Cadastro</StyledSidebarListItem>
          </Link>
        </StyledSidebarList>
      </StyledSideBar>
      <StyledTopBar>
        <ion-icon
          onClick={() => setIsOpen(!isOpen)}
          name="menu-outline"
        ></ion-icon>
        CSGO Skins
        <ion-icon onClick={addToCart} name="bag-handle-outline"></ion-icon>
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
      {/* <StyledProductsContainer>
        {products.map((p, i) => (
          <StyledProducts key={i}>
            <ion-icon name="bag-add-outline"></ion-icon>
            <img src={p.image} alt={p.name} />
            <h1>{p.name}</h1>
            <p>R$ {p.price}</p>
          </StyledProducts>
        ))}
      </StyledProductsContainer> */}
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

const StyledSideBar = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  background-color: #272d70;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.5s ease-in-out;
  z-index: 2;
  margin-left: -3px;
  &::after {
    content: "";
    width: 1px;
    background-color: #ccc;
    position: absolute;
    right: -1px;
    top: 60px;
    bottom: 0;
    transform: translateX(100%);
  }
  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 15%;
  }
  @media (min-width: 1440px) {
    width: 15%;
  }
  @media (min-width: 1920px) {
    width: 10%;
  }
`;
const StyledSidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 70px;
`;
const StyledSidebarListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #fbfbfb;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #fbfbfb;
`;

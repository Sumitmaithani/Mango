import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 14px 20px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  color: gray;
  border: 2px solid #e7e7e7;
`;


const Des = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
    <Image src={item.img} />
    <Info>
      <Title>{item.title}</Title>
      <Button>Shop now</Button>
    </Info>
    </Link>
  </Container>
  );
};

export default CategoryItem;

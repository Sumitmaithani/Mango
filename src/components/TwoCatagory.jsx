import mango1 from "../Images/mangogirl (3).webp";
import mango2 from "../Images/mango1.webp";
import mango3 from "../Images/category.webp";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ display: "block" })}
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 30px;
  width: 100vh;
`;
const Button = styled.button`
  padding: 14px 20px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  color: gray;
  border: 2px solid #e7e7e7;
`;

const Wrapper2 = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin: 4px;
`;
const Image2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "70vh" })}
`;
const Info2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
const Title2 = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 30px;
  width: 100vh;
`;
const Button2 = styled.button`
  padding: 14px 20px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  color: gray;
  border: 2px solid #e7e7e7;
`;

const TwoCatagory = () => {
  return (
    <Container>
      <Wrapper>
        <Link to={"/products/party"}>
          <Image src={mango3} />
          <Info>
            <Title>PARTY AND EVENTS</Title>
            <Button>
              <small>Shop now</small>
            </Button>
          </Info>
        </Link>
      </Wrapper>
      <Wrapper2>
        <Link to={"/products/summer"}>
          <Image2 src={mango1} />
          <Info2>
            <Title2>SUMMER GATEWAY</Title2>
            <Button2>
              <small>Shop now</small>
            </Button2>
          </Info2>
        </Link>
      </Wrapper2>
    </Container>
  );
};

export default TwoCatagory;

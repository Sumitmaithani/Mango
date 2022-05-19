import styled from "styled-components";
import MangoSlider from "./MangoSlider";
import { mobile } from "../responsive";

const Container = styled.div`
margin: 20px 0;
`;

const Title = styled.h1`
  font-weight: 500;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 20px;
`;


const Discover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  font-weight: 400;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
`;

const MangoGirls = () => {
  return (
    <Container className="container">
      <Title>#MANGOGIRLS</Title>
      <MangoSlider />
      <Discover>
        <Button>Discover more</Button>
      </Discover>
    </Container>
  );
};

export default MangoGirls;

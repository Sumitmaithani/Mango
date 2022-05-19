import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
const Box = styled.div``;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: 8%;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linkk = styled.a`
  margin: 9px 0px;
  font-size: 14px;
  cursor: pointer;
  color: grey;
  display: block;
  text-align: center;
`;

const Login = () => {
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Sign in</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Link to="/">
            <Button>LOGIN</Button>
            </Link>
            <Linkk>Forgotten your password?</Linkk>
            <hr />
            <Link to="/register"><Linkk>Don't have an account? Register</Linkk></Link>
          </Form>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default Login;

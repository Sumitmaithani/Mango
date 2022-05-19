import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({display:"none" })};
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginLeft:"5px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 
  justify-content: flex-end;
  padding: 0 18px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 550;
  letter-spacing: 1.5px;
  cursor: pointer;
  margin-left: 25px;
  color: #000;
  ${mobile({ fontSize: "12px", marginLeft:"8px" })}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MANGO.</Logo>
        </Center>
        <Right>
          <Link to="/register" >
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/admin">
          <MenuItem><PermIdentityIcon /></MenuItem>
          </Link>
          <MenuItem><FavoriteBorderIcon /></MenuItem>
          <MenuItem>
          <Link to='/cart'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
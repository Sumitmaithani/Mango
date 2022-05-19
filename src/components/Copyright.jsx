import styled from "styled-components";
import { mobile } from "../responsive";

const Copy = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 10px;
  margin-top: 40px;
  color: grey;
  display: table;
  margin: 0 auto;
  ;
  padding: 10px;
  ${mobile({ backgroundColor: "#f3f0f0" })}
`;

const Copyright = () => {
  return (
    <Copy>
      © {new Date().getFullYear()} MANGO All rights reserved Privacy Policy and
      Cookies | Terms & Conditions | ADA
    </Copy>
  );
};

export default Copyright;

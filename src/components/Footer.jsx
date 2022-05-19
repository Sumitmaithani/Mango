import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styled from "styled-components";
import payment from "../Images/payment.png";
import spotify from "../Images/spotify.ico";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ backgroundColor: "#f3f0f0" })}
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
  margin: 10px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f3f0f0" })}
`;

const Title = styled.h3`
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f3f0f0" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Image = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <h3>MANGO.</h3>
        </Logo>
        <Desc>
          <List>
            <ListItem>Help</ListItem>
            <ListItem>My purchases</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>Stores</ListItem>
            <ListItem>Apps</ListItem>
            <ListItem>Company</ListItem>
            <ListItem>Affiliate</ListItem>
            <ListItem>Work for Mango</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Site map</ListItem>
          </List>
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
          <SocialIcon>
            <YouTube />
          </SocialIcon>
          <SocialIcon>
            <Image src={spotify} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          <h2>Useful Links</h2>
        </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          <h3>Contacts</h3>
        </Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@mango.dev
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  );
};

export default Footer;

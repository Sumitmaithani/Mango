import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  z-index: 5;
`;


const Announcement = () => {
  return <Container>Super deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;

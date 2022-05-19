import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import MangoGirls from "../components/MangoGirls";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import TwoCatagory from "../components/TwoCatagory";

const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
  top: 0;
`

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Announcement />
        <Navbar />
      </Wrapper>
      <Slider />
      <Categories />
      <TwoCatagory />
      <Products />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;

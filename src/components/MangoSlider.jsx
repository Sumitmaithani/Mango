import Slider from "react-slick";
import { mobile } from "../responsive";
import mangogirls1 from "../Images/mangogirls.webp";
import mangogirls2 from "../Images/mangogirls (1).webp";
import mangogirls3 from "../Images/mangogirls (2).webp";
import mangogirls4 from "../Images/mangogirls (3).webp";
import styled from "styled-components";


const Wrapper = styled.div`
`;

const Img = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  object-fit: cover;
  ${mobile({ width: "80%" })}
`;

export default function MangoSlider() {
    var settings = {
        dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
        <Slider {...settings}>
            <Wrapper>
                <Img src={mangogirls1} />
            </Wrapper>
            <Wrapper>
                <Img src={mangogirls2} />
            </Wrapper>
            <Wrapper>
                <Img src={mangogirls3} />
            </Wrapper>
            <Wrapper>
                <Img src={mangogirls4} />
            </Wrapper>
        </Slider>
    );
}



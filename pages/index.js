import styled from "styled-components";
import Bener from "../component/Bener";
import CardH from "../component/CardH";
import CardV from "../component/CardV";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Badan = styled.body`
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
`;
export default function Home() {
  return (
    <div>
      <Badan>
        <Navbar/>
        <Bener/>
        <br/><br/><br/>
        <CardH/>
        <br/><br/>
        <CardV/>
        <br/><br/><br/><br/>
        <Footer/>
      </Badan>
    </div>
  )
}

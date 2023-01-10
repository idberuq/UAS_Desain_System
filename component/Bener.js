import React from "react";
import styled from "styled-components"

const Header = styled.div`
    background-image: url('laptop.jpg');
    width: 100%;
    height: 90vh;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
`
const Titel = styled.div`
    position: absolute;
    top: 25%;
    width: 100%;
`
const TitelH1 = styled.h1`
    color: white;
    text-align: center;
    font-size: 70px;
    text-shadow: 2px 2px #000000;
`
const TitelP = styled.p `
    color: white;
    text-align: center;
    text-shadow: 2px 2px #000000;
    font-size: 40px;
`
export default function Bener() {
    return (
        <div>
            <Header>
                <Titel>
                    <TitelH1>MY BLOG</TitelH1>
                    <TitelP>Tempat anda untuk menuangkan kreatifitas anda</TitelP>
                </Titel>
            </Header>
        </div>
    )
}
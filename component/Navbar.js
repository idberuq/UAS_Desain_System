import React from "react";
import styled from "styled-components"

const Penampung = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
`;
const Baris = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
`;
const Logo = styled.div`
    padding-right: 5px;
    grid-column: span 2;
    text-align: center;
`;
const LogoH1 = styled.h1`
    color: #b1d4e0;
    font-size: 20px;
`;
const Navigasi = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-align: left;
    grid-column: span 5;
`;
const Navli = styled.li`
    display: inline-block;
`;
const NavA = styled.a`
    display:block; 
    padding: 15px; 
    color: white; 
    text-decoration: none;
`;
const NavIcon = styled.div`
    grid-column: span 5;
`;
const NavIconUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    float: right;
`;
const NavIconLi = styled.li`
    display: inline-block;
`
const NavIconA = styled.a`
    display: block;
    text-decoration: none;
    margin: 5px;
    padding: 7px;
    color: black;
    float: left;
`;

export default function Navbar() {
    return (
        <div>
            <Penampung>
                <Baris>
                    <Logo>
                        <LogoH1>
                            MY BLOG
                        </LogoH1>
                    </Logo>
                    <Navigasi>
                        <Navli>
                            <NavA>
                                Home
                            </NavA>
                        </Navli>
                        <Navli>
                            <NavA>
                                Blog
                            </NavA>
                        </Navli>
                        <Navli>
                            <NavA>
                                About Us
                            </NavA>
                        </Navli>
                    </Navigasi>
                    <NavIcon>
                        <NavIconUl>
                            <NavIconLi>
                                <NavIconA><img src="sreach.png" style={{'width': 20+'px','height': 20+'px'}}/></NavIconA>
                            </NavIconLi>
                        </NavIconUl>
                    </NavIcon>
                </Baris>
            </Penampung>
        </div>
    )
}
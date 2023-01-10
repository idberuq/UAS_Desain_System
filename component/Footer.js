import styled from "styled-components"
import React from "react";

const Kaki = styled.footer`
    background-color: #292c2f;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: normal 16px sans-serif;
    padding: 45px 50px;
`
const KakiKanan = styled.div`
    float: right;
    max-width: 180px;
`
const KakiKananA = styled.a`
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-left: 10px;
    transition:all .25s;
`

const KakiKiri = styled.div`
    color: #8f9296;
    font-size: 14px;
    margin: 0;
`
const KakiKiriP = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 10px;
    padding: 0;
    transition: ease .25s;
`
const KakiKiriA = styled.a`
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    padding-right: 10px;
    color: inherit;
    transition: ease .25s;
`

export default function Footer() {
    return(
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Kaki>
                <KakiKiri>
                    <KakiKiriP>
                        <KakiKiriA>Home </KakiKiriA> 
                        <KakiKiriA>Blog </KakiKiriA>
                        <KakiKiriA>Pricing </KakiKiriA>
                        <KakiKiriA>About </KakiKiriA>
                        <KakiKiriA>Faq </KakiKiriA>
                        <KakiKiriA>Contact </KakiKiriA>
                    </KakiKiriP>
                    <p>Company Name &copy; 2015</p>
                </KakiKiri>
                <KakiKanan>
                    <KakiKananA><i class="fa fa-facebook"/></KakiKananA>
                    <KakiKananA><i class="fa fa-twitter"/></KakiKananA>
                    <KakiKananA><i class="fa fa-linkedin"/></KakiKananA>
                    <KakiKananA><i class="fa fa-github"/></KakiKananA>
                </KakiKanan>
            </Kaki>
        </div>
    )
}
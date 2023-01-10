import React from "react";
import styled from "styled-components"

const Container = styled.div`
    background-color: rgb(218, 255, 243);
    box-sizing: border-box;
    min-height: 40vh;
    width: 80%;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    padding: 0.2em;
`
const Card = styled.div`
    /* justify-content: center; */
    margin: 0.5em 1.2em 0.5em 0.1em;
    height: 18em;
    width: 100%;
    max-width: 99%;
    flex: 1 1 auto;
    display: flex;
    background-color: white;
    box-shadow:
    3.4px 3.4px 2.7px rgba(0, 0, 0, 0.029),
    8.7px 8.7px 6.9px rgba(0, 0, 0, 0.042),
    17.7px 17.7px 14.2px rgba(0, 0, 0, 0.054),
    36.5px 36.5px 29.2px rgba(0, 0, 0, 0.068),
    100px 100px 80px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`
const CardBody = styled.div`
    width: 8em;
    max-height: 90%;
    max-width: 700px;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 1em;
`
const Cardtext = styled.div`
    position: relative;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 0.8em 0;
    padding: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 1em;
    background: linear-gradient(rgba(255, 255, 255, 0), white);
`
const TextH3 = styled.h3`
    margin-top: 0;
`
const TextP = styled.p`
    margin-top: 0;
`
const Button = styled.button`
    min-width: 8.3em;
    flex: none;
    align-self: flex-start;
    margin-top: auto;
    padding: 0.6em 1.2em;
    font-size: 0.92em;
    color: #ffffff;
    background-color:rgb(0, 0, 255) ;
    border: 0.5px solid #777;
    border-radius: 5px;
` 
export default function CardV() {
    return (
        <div>
            <Container>
                <Card>
                    <img style={{
                        'height': 100 + '%',
                        'max-width': 320 + 'px',
                        '-o-object-fit': 'cover',
                        'object-fit': 'cover',
                        'flex': 1 + 1 + 'auto',
                        'border-radius': 15 + 'px' + 0 + 0 + 15 + 'px'
                    }}
                        src='https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260' />
                        <CardBody>
                        <Cardtext>
                            <TextH3>Lorem ipsum</TextH3>
                            <TextP>03 juni 2022</TextP>
                            <TextP>Autor : Carlos</TextP>
                            <TextP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </TextP>
                            <Button>Lihat</Button>
                        </Cardtext>
                        </CardBody>
                </Card>
                <Card>
                    <img style={{
                        'height': 100 + '%',
                        'max-width': 320 + 'px',
                        '-o-object-fit': 'cover',
                        'object-fit': 'cover',
                        'flex': 1 + 1 + 'auto',
                        'border-radius': 15 + 'px' + 0 + 0 + 15 + 'px'
                    }}
                        src='https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260' />
                        <CardBody>
                        <Cardtext>
                            <TextH3>Lorem ipsum</TextH3>
                            <TextP>03 juni 2022</TextP>
                            <TextP>Autor : Carlos</TextP>
                            <TextP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </TextP>
                            <Button>Lihat</Button>
                        </Cardtext>
                        </CardBody>
                </Card>
                <Card>
                    <img style={{
                        'height': 100 + '%',
                        'max-width': 320 + 'px',
                        '-o-object-fit': 'cover',
                        'object-fit': 'cover',
                        'flex': 1 + 1 + 'auto',
                        'border-radius': 15 + 'px' + 0 + 0 + 15 + 'px'
                    }}
                        src='https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260' />
                        <CardBody>
                        <Cardtext>
                            <TextH3>Lorem ipsum</TextH3>
                            <TextP>03 juni 2022</TextP>
                            <TextP>Autor : Carlos</TextP>
                            <TextP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </TextP>
                            <Button>Lihat</Button>
                        </Cardtext>
                        </CardBody>
                </Card>
                <Card>
                    <img style={{
                        'height': 100 + '%',
                        'max-width': 320 + 'px',
                        '-o-object-fit': 'cover',
                        'object-fit': 'cover',
                        'flex': 1 + 1 + 'auto',
                        'border-radius': 15 + 'px' + 0 + 0 + 15 + 'px'
                    }}
                        src='https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260' />
                        <CardBody>
                        <Cardtext>
                            <TextH3>Lorem ipsum</TextH3>
                            <TextP>03 juni 2022</TextP>
                            <TextP>Autor : Carlos</TextP>
                            <TextP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </TextP>
                            <Button>Lihat</Button>
                        </Cardtext>
                        </CardBody>
                </Card>
            </Container>
        </div>
    )
}
import React from "react";
import styled from "styled-components"


const Penampung = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;
const Baris = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
`;
const GridCard = styled.div`
    grid-column: span 4;
`
const Kartu = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 2);
    transition: 0.3s;
    
    border-radius: 10px 10px 0 0;
    margin: 50px;
    color: #3d3d3d;
    font-size: 18px;
`
const Penampung_Kartu = styled.div`
    padding: 2px 16px;
`
const Penampung_KartuP = styled.p`
    text-align : center;
`

export default function CardH() {
    return (
        <div>
            <Penampung>
                <Baris>
                    <GridCard>
                        <Kartu>
                            <img src="card.jpg" style={{'width': 340+'px','width' : 100+'%','height': 200+'px'}}/>
                            <Penampung_Kartu>
                                <Penampung_KartuP>Desain Web</Penampung_KartuP>
                                <Penampung_KartuP>By</Penampung_KartuP>
                                <Penampung_KartuP>Beruq</Penampung_KartuP>
                            </Penampung_Kartu>
                        </Kartu>
                    </GridCard>
                    <GridCard>
                        <Kartu>
                            <img src="card.jpg" style={{'width': 340+'px','width' : 100+'%','height': 200+'px'}}/>
                            <Penampung_Kartu>
                                <Penampung_KartuP>Desain Web</Penampung_KartuP>
                                <Penampung_KartuP>By</Penampung_KartuP>
                                <Penampung_KartuP>Beruq</Penampung_KartuP>
                            </Penampung_Kartu>
                        </Kartu>
                    </GridCard>
                    <GridCard>
                        <Kartu>
                            <img src="card.jpg" style={{'width': 340+'px','width' : 100+'%','height': 200+'px'}}/>
                            <Penampung_Kartu>
                                <Penampung_KartuP>Desain Web</Penampung_KartuP>
                                <Penampung_KartuP>By</Penampung_KartuP>
                                <Penampung_KartuP>Beruq</Penampung_KartuP>
                            </Penampung_Kartu>
                        </Kartu>
                    </GridCard>
                </Baris>
            </Penampung>
        </div>
    )
}
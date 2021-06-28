import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import paint3d from './paint3d.jpg'
import paintbrush from './paintbrush.gif'
import win7paint from './win7-paint.jpg'

const FactWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border-bottom: 2px solid #094A5F;
`
const Fact = styled.p`
`
export const Facts = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Интересные факты о Paint</h1>
            <FactWrapper>
                <Fact><img src={paintbrush} alt="" width={300} style={{float: "left", margin: "0px 10px 0px 0"}} />В Windows 3.0 был переименован в PaintBrush. Но потом в Windows 95 и поздних версиях Windows он был опять переименован в Paint (однако, программа может вызываться и командой-затычкой pbrush, что есть явное сокращение от Paint Brush).</Fact>
            </FactWrapper>
            <FactWrapper>
                <Fact><img src={win7paint} alt="" width={300} style={{float: "left", margin: "0px 10px 0px 0"}} />В Windows 7 Paint впервые был полностью переработан, получил ленточный (Ribbon) интерфейс, дополнительные кисти и фигуры, схожие с библиотекой Microsoft Office.</Fact>
            </FactWrapper>
            <FactWrapper>
                <Fact><img src={paint3d} alt="" width={300} style={{float: "left", margin: "0px 10px 0px 0"}} />В Windows 10 Creators Update появились Paint 3D и View 3D.</Fact>
            </FactWrapper>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts)

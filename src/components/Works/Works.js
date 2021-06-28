import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import moon from './moon.jpg'

const Wrapper = styled.div`;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Paint = styled.div`
    max-width: 300px;
    margin: 5px 5px 20px 5px;
`

const PaintImage = styled.img`
    width: 100%;
`

const PaintName = styled.p`
    text-align: end;
    margin: 0px;
`

export const Works = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Работы учеников в Paint</h1>
            <Wrapper>

            </Wrapper>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Works)

import React, {useState} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ModalForm from '../ModalForm/ModalForm'

import ImgChildren from './Rectangle33.png'
import ImgOwl from './совы_DoV (12) 1.png'
const Fon = styled.div`
    height: 500px;
    background: url("${ImgChildren}") center no-repeat;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Black = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
`
const BlackBoard = styled.div`
    background: linear-gradient(120.04deg, #4EBBDC 0%, #094A5E 100%);
    border: 10px solid #C97627;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    max-width: 500px;
    padding: 20px;
    position: relative;
    text-align: center;
`
const BlackBoardTitle = styled.h1`
    margin: 0px;
    color: white;
    z-index: 1;
`
const DownloadButton = styled.button`
    background: #BCFD6A;
    border: 5px solid #C97627;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    max-width:270px;
    z-index: 1;
    margin: 10px;
    font-size: 12pt;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;
    &:focus{
        outline: none;
        box-shadow: 0 0 0 4px #cbd6ee;
    }
`
const Results = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`
const ResultsResult = styled.div`
    width: 200px;
    padding: 5px;
    align-self: center;
    text-align: center;
`
const loockPrez = () => {
    window.location.href = 'https://docs.google.com/presentation/d/1wIzb8NGHmSKyG2dEPSy4Kzhx6A2L0GQiVpgspOMNW1E/edit?usp=sharing';
}

export const Home = (props) => {
    const [isOpen, setisOpen] = useState(false)

    const onClose = () => {
        setisOpen(!isOpen)
    }

    return (
        <div>
            <Fon> 
                <Black></Black>
                <BlackBoardTitle>Юный художник</BlackBoardTitle>
                <BlackBoard>
                    <p>
                        Целью настоящего курса является формирование художественной культуры младшего школьника, привитие навыков работы с компьютерной графикой и осознание связей и взаимодействие искусства с жизнью.
                    </p>
                    <img src={ImgOwl} alt="" style={{position: "absolute", right: "-200px", top: "-20px", maxHeight: "250px"}} />
                </BlackBoard>
                <DownloadButton onClick={() => loockPrez()}>Скачать программу</DownloadButton>
            </Fon>
            <div>
                <h2 style={{textAlign: 'center'}}>Результаты обучения</h2>
                <Results>
                    <ResultsResult>Развитие умений использования инструментов графического редактора Paint.</ResultsResult>
                    <ResultsResult>Формирование представления о компьютере как универсальном устройстве обработки информации.</ResultsResult>
                    <ResultsResult>Использование готовых форм при создании и редактировании изображений.</ResultsResult>
                    <ResultsResult>Использование готовых форм при создании и редактировании изображений.</ResultsResult>
                    <ResultsResult>Простейший графический редактор Paint, инструменты создания простейших графических объектов.</ResultsResult>
                    <ResultsResult>Развитие основных навыков и умений использования инструментов графического редактора Paint.</ResultsResult>
                    <ResultsResult>Развитие умений использования клавиши Shift для создания изображений в среде графического редактора Paint.</ResultsResult>
                    <ResultsResult>Формирование навыков и умений безопасного и целесообразного поведения при работе с компьютером.</ResultsResult>
                    <ResultsResult>Развитие основных навыков и умений использования инструментов графического редактора Paint.</ResultsResult>
                    <ResultsResult>Создание представления о компьютерной графике, графическом изображении, рисунке. Поиск и выделение необходимой информации.</ResultsResult>
                </Results>
            </div>
            <div style={{textAlign: 'center', margin: '20px auto'}}>
                <div style={{border:'1px solid black', display: 'inline-block', padding: 10}}>
                    Если у вас остались вопросы - напишите мне, я обязательно отвечу
                    <DownloadButton onClick={() => onClose()}>Написать учителю</DownloadButton>
                </div>
            </div>
            <ModalForm isOpen={isOpen} onClose={onClose} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React, {useState} from 'react'
import { connect } from 'react-redux'

import './Lessons.css'
import '../../App.css';


import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
`
const ThemeList = styled.ol`
    list-style-type: none;
    width: 100px;
    display: inline-block;
    overflow: auto;
    direction: rtl;
`
const ThemeItem = styled.li`
    padding: 5px;
    border-bottom: 1px solid black;
    text-align: center;
    cursor: pointer;
`

export const Lessons = (props) => {
    const [lesson, setLesson] = useState(props.themes)
    const [theme, setTheme] = useState(props.themes[0])
    const [active, setActive] = useState(0)
    const showTheme = (index) => {
        setActive(index)
        setTheme(lesson[index])
    }
    return (
        <Wrapper>
            <ThemeList>
                {lesson.map((item,index) => 
                    <ThemeItem key={index} className={index === active? 'active': ''} onClick={() => showTheme(index)}>Тема {index + 1}</ThemeItem>
                )}
            </ThemeList>
            {theme.title === ''? <div style={{width: 1000}}></div> :  <div style={{width: 1000}}> 
                <h2>{theme.title}</h2>
                <div style={{textAlign: 'center'}}><iframe src={theme.link_prezentation+`/embed?start=false&loop=false&delayms=60000`} frameBorder="0" width="700" height="414" allowFullScreen={true}></iframe></div>
                <p>{theme.description}</p>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <a className="menu-link" href={theme.download_prez} target="_blank" rel="noopener noreferrer">Скачать презентацию</a>
                    <a className="menu-link" href={theme.download_instruction} target="_blank" rel="noopener noreferrer">Скачать инструкцию</a>
                    <a className="menu-link" href={theme.download_task} target="_blank" rel="noopener noreferrer">Скачать задание</a>
                </div>
            </div>
            }
        </Wrapper>
    )
}


const mapStateToProps = (state) => {
   return {
      themes: state.themes,
   };
};

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)

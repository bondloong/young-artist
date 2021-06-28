import React, {useState} from 'react'   
import styled from 'styled-components'

const Modal = styled.div`
    max-width: 600px;
    max-height: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    align-items: stretch;
`
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    text-align: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    background: rgba(0, 0, 0, 0.2);
`
const MessageArea = styled.textarea`
    background: linear-gradient(120.04deg, #4EBBDC 0%, #094A5E 100%);
    border: 10px solid #C97627;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 12pt;
    font-family: 'Roboto', sans-serif;
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


export default function ModalForm ({ isOpen, onClose}){
    const [message, setmessage] = useState('')
    
    const onChangeInput = (e) => {
        setmessage(e.target.value)
    }

    if (isOpen === false) return null
    return(    
        <Wrapper>
            <Modal>
                <MessageArea cols="30" rows="10" style={{marginBottom: 10}} className="message" onChange={(e) => onChangeInput(e)} value={message} placeholder="Введите сообщение"></MessageArea>
                <DownloadButton onClick={() => onClose()}>Отправить</DownloadButton>
            </Modal>
        </Wrapper>
    )
}

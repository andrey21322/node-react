import React, { useState, useEffect } from "react"
import { useHttp } from '../../hooks/http.hook'
import './contactPage.css'

const TOKEN = "5979091454:AAGNNiZ720PZxGMOVjOgcB03l3Zem3pcdPQ"
const CHAT_ID = "-1001765149664"
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

function ContactPage() {
    const [tg, setTg] = useState({userTg: '', userMessage:''})
    const [message, setMessage] = useState('')
    const {request} = useHttp()

    useEffect(() => {
        setTimeout(() => {
            setMessage('')
        }, 6000);
        return () => clearTimeout(message);
      }, [message]);

    const sendHandler = async () => {
        try {
            if(tg.userMessage === '' || tg.userTg === '') {
                return setMessage('Telegram and message can not be empty')
            }
            request(URI_API, 'POST', {chat_id: CHAT_ID, text: tg})
            setMessage('Success')
            setTg({userTg: '', userMessage:''})
        } catch(e) {
            setMessage(e.message)
        }
    }
    return (
    <>
        <div className="wrapper">
        <form className="form">
            <div className="cc">
                <input 
                    type="text" 
                    className="name"
                    name="Name" 
                    placeholder="Youre Telegram" 
                    value={tg.userTg}
                    onChange={e => setTg({...tg, userTg:e.target.value})}
                    required
                />
                <input 
                    type="textarea" 
                    className="text" 
                    name="Message" 
                    placeholder="Youre Message" 
                    value={tg.userMessage}
                    onChange={e => setTg({...tg, userMessage:e.target.value})}
                    required
                />
                
                <a onClick={sendHandler} className="glow-button">SEND</a>
            </div>
        </form>
        {message ? <div className="mr">{message}</div> : ''}
        </div>
    </>
    )
}
  
export default ContactPage;
  
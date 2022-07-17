import { useEffect,useState } from "react";
import {channels} from '../components/Projects'
import emailjs from 'emailjs-com';
import Modal from "../components/Modal";
const Contact = () => {
    const [message,setMessage] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [status,setStatus] = useState('Sending Email...')
    const [isSending,setIsSending] = useState(false)
    let i =0;
    const handleSend = async (e) => {
        e.preventDefault();
        try{
            if (message && email && subject){
                setIsSending(true);
                const sent = await emailjs.sendForm('service_6b0go18', 'template_ft20z44', e.target , 'Z_1WYlUfrrrR1odUe');
                console.log(sent)
                if(sent){
                    setEmail('');
                    setMessage('');
                    setSubject('');
                    setStatus('Sent');
                    setIsSending(false);
                    setStatus('Sending Email...');
                }
            }
        }
        catch (err){
            console.log(err)
            setIsSending(false);
        }
    }
    return (
        <div className="body">
        <form onSubmit={handleSend}>
           <div className="form">
                <h2 className="label">Send Me a Message</h2>
                <div className="message-detail-container">
                    <label className="label">Subject:</label>
                    <input name='subject' value={subject} onChange={(e) => {setSubject(e.target.value)}} placeholder="Subject" type="text" className="from-input" required/>
                    <label className="label">From:</label>
                    <input name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" type="text" className="from-input email" required/>
                    
                </div>
                <textarea name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter Message Here" className="message-input" type="text" required/>
                <div className="label"><button className="send-button">Send</button></div>
           </div>
        </form>
           <div>
                <p style={{textAlign:'center'}}>Or get in touch via:</p>
                <div  className="channel-container">
                    {channels.map((c) =>{ i++; 
                        return(
                            <div key={i}>
                                <div className="channel-content-container">
                                    <img src={c.img} className='channel-images'/>
                                    <div className="channel-details">{c.details}</div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
           </div>
          {isSending&&<Modal status = {status}/>}
        </div>
    )
}
export default Contact;
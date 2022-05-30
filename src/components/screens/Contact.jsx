import { faGithub, faInstagram, faLinkedin, faStackOverflow, faTwitter, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animations/AnimatedLetters'
import './../../assets/scss/Contact.scss'


export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [subject,setSubject] = useState("")
    const [mobile,setMobile] = useState("")
    const [message,setMessage] = useState("")
    const [errorMessage,setErrorMessage] = useState("")
    const [nameError,setNameError] = useState(false)
    const [mailError,setMailError] = useState(false)
    const [subjectError,setSubjectError] = useState(false)
    const [mobileError,setMobileError] = useState(false)
    const [messageError,setMessageError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            Name: name,
            Mail:mail,
            Mobile: mobile,
            Subject: subject,
            Message:message,
        }
        if( name !== "" && mail !== "" && mobile !== "" && subject !== "" && message !== ""){
            axios
                .post('https://sheet.best/api/sheets/d2be6958-4241-4b29-b41d-23e2cb1c5ea5',data)
                .then((response) => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
        }
        if( name === "" ){
            setStyle({...style,name:{border:"2px solid red"}})
        }
        if( mail === "" ){
            setStyle({...style,mail:{border:"2px solid red"}})
        }
        if( mobile === "" ){
            setStyle({...style,mobile:{border:"2px solid red"}})
        }
        if( subject === "" ){
            setStyle({...style,subject:{border:"2px solid red"}})
        }
        if( message === "" ){
            setStyle({...style,message:{border:"2px solid red"}})
        }
    }

    
    const [style, setStyle] = useState({
        name :{
            border : '2px solid transparent'
        },
        mail :{
            border : '2px solid transparent'
        },
        mobile :{
            border : '2px solid transparent'
        },
        subject :{
            border : '2px solid transparent'
        },
        message :{
            border : '2px solid transparent'
        }
    })
    console.log("styleeeeee",style);

    return (
        <div className='contact-main-container'>
            <div className="container contact-page">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className="second-container">
                    <div className="text-zone">
                        <p>
                            I am interested in freelance opportunities - especially ambitious or
                            large projects. However, if you have other request or question,
                            don't hesitate to contact me using below form either.
                        </p>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    <li className="half" style={style.name} >
                                        <input placeholder="Name" type="text" required onChange={(e)=>setName(e.target.value)} />
                                    </li>
                                    <li className="half" style={style.mail} >
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            required
                                            onChange={(e)=>setMail(e.target.value)}
                                        />
                                    </li>
                                    <li style={style.subject}>
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            required
                                            onChange={(e)=>setSubject(e.target.value)}
                                        />
                                    </li>
                                    <li style={style.mobile} >
                                        <input
                                            placeholder="Mobile"
                                            type="number"
                                            required
                                            onChange={(e)=>setMobile(e.target.value)}
                                        />
                                    </li>
                                    <li style={style.message} >
                                        <textarea
                                            placeholder="Message"
                                            required
                                            onChange={(e)=>setMessage(e.target.value)}
                                        ></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND" onClick={handleSubmit} />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div> 
                    <div className='contact-link'>
                        <a href='geo:124.028582,-29.201930' target="_blank" class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faLocationDot} color="#ffd700" />
                            <h6>Chembayil house Kumbalakode (PO) Punjappadam, Pazhayannur, Thrissur 680587</h6>
                        </a>
                        <a href='tel:8129133008' target="_blank" class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faPhone} color="#ffd700" />
                            <h6>+91 8129133008</h6>
                        </a>
                        <a href='mailto:swalihmoosa72@gmail.com' target="_blank" class="single-card">
                            <FontAwesomeIcon className='font-icon' icon={faEnvelope} color="#ffd700" />
                            <h6>swalihmoosa72@gmail.com</h6>
                        </a>
                        <hr className="line" />
                        <div className="small-links">
                            <a href='https://github.com/swalihmoosa' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faGithub} color="#ffd700" />
                            </a>
                            <a href='https://www.linkedin.com/in/swalih-moosa/' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faLinkedin} color="#ffd700" />
                            </a>
                            <a href='https://stackoverflow.com/users/19142237/swalih-moosa' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faStackOverflow} color="#ffd700" />
                            </a>
                            <a href='https://wa.me/8129133008' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faWhatsapp} color="#ffd700" />
                            </a>
                            <a href='https://twitter.com/moosa_swalih' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faTwitter} color="#ffd700" />
                            </a>
                            <a href='https://www.instagram.com/junior_moosa/' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faInstagram} color="#ffd700" />
                            </a>
                            <a href='https://www.facebook.com/swalih.moosa.7/' target="_blank" class="single-card">
                                <FontAwesomeIcon className='font-icon' icon={faFacebook} color="#ffd700" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

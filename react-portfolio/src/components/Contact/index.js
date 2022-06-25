import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_0h6vsb8','template_u12xq3m',
            form.current,
            '7rUbSCgF1Tvj4CeF5'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return(
        <>
            <div className='container contact-page' >
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    //    1.5 seconds delay 
                        idx={15}
                        />

                    </h1>
                    <p>
                        Feel free to contact me for more information!
                        <br/>
                        
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='email'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required> </textarea>
                                </li>
                                <li>
                                    <input type={"submit"} className='flat-button' value='Send' />
                                </li>
                            </ul>
                        </form>

                    </div>
                    
                </div>

            </div>

        
        </>
    )
}

export default Contact;
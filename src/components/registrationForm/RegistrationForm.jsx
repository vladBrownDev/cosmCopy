import React, { useState } from 'react'
import './RegistrationForm.css'
import logo from "../../images/form.png"
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
    let [inpValue, setInpValue] = useState("")
    let [nameInpValue, setNameInpValue] = useState("")
    let [inputState, setInputState] = useState(["","Имя"])
    let [phoneState, setphoneState] = useState("")

        const changeInpValue = (e) => {
            e.target.name === "name" ? setNameInpValue(e.target.value) : setInpValue(e.target.value)
        }
        const sendEmail = (e) => {
            e.preventDefault();
            const mask =  "+38(___)___-____"
            if(nameInpValue === "" || inpValue.includes("_") || inpValue === mask) {
                    e.target.reset()
                    setInputState(["error", "Неверный ввод"])
                    setphoneState("error")
            }
            else {
                emailjs.sendForm('service_85keurj', 'template_1z8a80n', e.target, 'user_I9RkM2wjvwskcN9ZDoUS0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                setphoneState("")
                e.target.reset()
                setInputState(["", "Скоро с вами свяжется наш оператор!"])
            }
            
        };
    
    return (
        <section id="formSec">
            <div className="sectionLeft">
                <div className="mainHeading">
                    Записаться
                </div>
                <div className="sectionDesc" id="formDesc">
                    Заполните форму, что бы записатся на прием и мы вам перезвоним.
                </div>
            </div>
            <img alt="logo" src={logo}/>
            <form onSubmit={sendEmail}>
                <div id="inputs">
                    <input onChange={changeInpValue} placeholder={inputState[1]} name="name" className="contactInp" id={inputState[0]}/>
                    <InputMask onChange={changeInpValue} placeholder="Введите номер" name="number" className="contactInp" id={phoneState} mask="+38(999)999-9999" alwaysShowMask = {true}/>
                </div>
                <input type="submit" value="Записаться" id="formBut"/>
            </form>
        </section>
    )
}

export default RegistrationForm;
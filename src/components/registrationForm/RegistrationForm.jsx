import React, { useState } from 'react'
import './RegistrationForm.css'
import logo from "../../images/form.png"
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import BootstrapDialogTitle from '../helpers/DialogTitle'

const validationSchema = yup.object({
    name: yup
      .string('Enter your email')
      .required('Введите имя'),
    phone: yup
      .string('Enter your password')
      .matches(/^(?:\+38)?(0\d{9})$/, 'Введите правильный формат')
      .required('Введите номер телефона')
  });

const botToken = '2112801907:AAEDhGu4uIBUgm23XDDTaqYQFWI2bSIUpIM';
const chatId = '-701342146';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const RegistrationForm = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const text = `От ${values.name}. Телефон ${values.phone}`;
            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`;
            axios.get(url).then(() => {
                formik.setValues({ name: '', phone: '' });
                formik.setTouched(false);
                setOpen(true);
            });
        },
    });

    return (
        <section id="formSec">
            <div className="sectionLeft">
                <div className="mainHeading">
                    Записаться
                </div>
                <div className='mobileHeader'>
                    Записаться
                </div>
                <div className="sectionDesc" id="formDesc">
                    Заполните форму, что бы записаться на прием и мы вам перезвоним.
                </div>
            </div>
            <img alt="logo" src={logo}/>
        
            <form onSubmit={formik.handleSubmit}>
                <div id="inputShell">
                    <TextField
                        id="name"
                        name="name"
                        label="Имя"
                        variant="standard"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        className="contactInp"
                    />
                    <TextField
                        id="phone"
                        name="phone"
                        label="Номер телефона"
                        variant="standard"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        className="contactInp"
                    />
                </div>
                 <input type="submit" value="Записаться" id="formBut"/>
            </form>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Ваша заявка отправлена!
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    Спасибо за заявку, скоро с Вами свяжется наш администратор. Хорошего дня!
                </Typography>
                </DialogContent>
            </BootstrapDialog>
        </section>
    )
}

export default RegistrationForm;
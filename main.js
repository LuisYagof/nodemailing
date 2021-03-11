//Requerimos el paquete
const nodemailer = require('nodemailer');
const cred = require('./credentials.js')

//Creamos el objeto de transporte
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: cred
});

let message = "${message from node//}";

let mailOptions = {
  from: 'luisyagofdez@gmail.com',
  to: 'meyeralten@gmail.com',
  subject: 'NodeMailing',
  text: message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});
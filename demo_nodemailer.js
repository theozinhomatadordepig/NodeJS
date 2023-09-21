var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'umsemighoul@gmail.com',
    pass: 'uuum dtsn jkad dwli'
  }
});

var mailOptions = {
  from: 'umsemighoul@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'uuum dtsn jkad dwli'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
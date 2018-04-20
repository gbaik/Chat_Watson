const path = require('path');
const express = require('express');

const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
const languageTranslator = new LanguageTranslatorV2({
    url: "https://gateway.watsonplatform.net/language-translator/api",
    username: process.env.IBM_WATSON_API_USERNAME,
    password: process.env.IBM_WATSON_API_PASSWORD,
});

const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
const io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

io.on('connection', (socket) => {
  console.log('User connected');
 
  socket.on('sendMessage', (message) => {
    let options = {
      text: message.text,
      source: 'en',
      target: message.outputLanguage || 'es'
    };

    languageTranslator.translate(options, (err, data) => {
        if (err)  {
          return console.log('error:', err);
        } 

        let translation = data.translations[0].translation;
        let translatedMesage = {
          ...message,
          text: translation
        }

        io.emit('displayMessage', translatedMesage);        
    })
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
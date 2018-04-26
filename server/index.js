const express = require('express');
const fs = require('fs');
const path = require('path');
const player = require('play-sound')(opts = {});
 
const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
const languageTranslator = new LanguageTranslatorV2({
    url: "https://gateway.watsonplatform.net/language-translator/api",
    username: process.env.IBM_WATSON_TRANSLATE_USERNAME,
    password: process.env.IBM_WATSON_TRANSLATE_PASSWORD,
});

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const textToSpeech = new TextToSpeechV1({
  url: 'https://stream.watsonplatform.net/text-to-speech/api/',
  username: process.env.IBM_WATSON_TEXT_TO_SPEECH_USERNAME,
  password: process.env.IBM_WATSON_TEXT_TO_SPEECH_PASSWORD
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
  });

  socket.on('playAudio', (message) => {
    let params = {
      text: message.text,
      accept: 'audio/wav'
    };

    textToSpeech
      .synthesize(params, function(err, audio) {
        if (err) throw err

        textToSpeech.repairWavHeader(audio);

        fs.writeFile('audio.wav', audio, { flag: 'wx' }, function (err) {
          if (err) throw err
          
          player.play('audio.wav', function(err) {
            if (err) throw err

            fs.unlink('audio.wav',function(err) {
              if(err) return console.log(err);

              console.log('file deleted successfully');
            });  
          })
        });        
    });
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
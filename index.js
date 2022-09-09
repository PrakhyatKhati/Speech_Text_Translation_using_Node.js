const { Deepgram } = require('@deepgram/sdk');
const fs = require('fs');

// The API key you created in step 1
const deepgramApiKey = '26c4f8ca03f7bb8f336ae05357f623a35fd939f3';

// Replace with your file path and audio mimetype
const pathToFile = '/Users/prakhyatkhati/Downloads/Test.m4a';
const mimetype = 'audio/m4a';

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

console.log('Requesting transcript...')
console.log('Your file may take up to a couple minutes to process.')
console.log('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.')
console.log('To learn more about customizing your transcripts check out developers.deepgram.com.')

deepgram.transcription.preRecorded(
  { buffer: fs.readFileSync(pathToFile), mimetype },
  { punctuate: true, language: 'en-US' },
)
.then((transcription) => {
  console.dir(transcription, {depth: null});
})
.catch((err) => {
  console.log(err);
});
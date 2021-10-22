const express = require('express');
require('dotenv').config();
const path = require('path');
const AWS = require('aws-sdk');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/photography', async (req, res) => {
    try {
        AWS.config.update({
            credentials: {
                accessKeyId: process.env.S3_KEY,
                secretAccessKey: process.env.S3_SECRET
            },
            region: 'eu-west-2'
        });
        const s3 = new AWS.S3();
        const data = await s3.listObjectsV2({
            Bucket: 'hayhaydz-photography'
        }).promise();
    
        res.send(data);
    } catch(e) {
        console.log('error' + e);
    }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Portfolio listening on ${port}`);
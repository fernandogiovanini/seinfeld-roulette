import seinfeld from './seinfled.js';

const fs = require('fs');
const client = require('https');

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

            }
        });
    });
}

seinfeld.map((episode) => {
    console.log(episode);
    downloadImage(episode.thumb, `./public/thumb/${episode.netflix_video_id}.webp`);
})

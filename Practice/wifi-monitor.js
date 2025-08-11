// connectivity-check.js
const fs = require('fs');
const https = require('https');

const LOG_FILE = 'connectivity.log';
let isDown = false;
let downStartTime = null;

// Append log to file
function logToFile(message) {
    fs.appendFileSync(LOG_FILE, message + '\n', 'utf8');
}

// Format time as DD-MMM-YYYY HH:MM:SS
function getTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Convert ms to readable duration
function formatDuration(ms) {
    const sec = Math.floor(ms / 1000) % 60;
    const min = Math.floor(ms / (1000 * 60)) % 60;
    const hrs = Math.floor(ms / (1000 * 60 * 60));
    return `${hrs > 0 ? hrs + 'h ' : ''}${min > 0 ? min + 'm ' : ''}${sec}s`;
}

// Check internet connectivity
function checkInternet() {
    const req = https.get('https://clients3.google.com/generate_204', res => {
        if (res.statusCode === 204) {
            if (isDown) {
                const upTime = getTime();
                logToFile(`🟢 Internet UP at ${upTime}`);
                const downtimeDuration = Date.now() - downStartTime;
                logToFile(`Downtime Duration: ${formatDuration(downtimeDuration)}`);
                logToFile('\n' + '-'.repeat(80) + '\n');
                isDown = false;
            }
        } else {
            handleDown();
        }
    });

    req.on('error', handleDown);
    req.end();
}

function handleDown() {
    if (!isDown) {
        const downTime = getTime();
        logToFile(`🔴 Internet DOWN at ${downTime}`);
        downStartTime = Date.now();
        isDown = true;
    }
}

// Run every 5 seconds
setInterval(checkInternet, 5000);

// Initial check
checkInternet();

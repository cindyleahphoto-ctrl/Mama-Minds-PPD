// publish.js

// This script is optimized for Termux to publish content.

const fs = require('fs');
const path = require('path');

// Function to publish content
function publishContent(content) {
    const filePath = path.join(__dirname, 'published_content.txt');
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Content published successfully!');
    });
}

// Check for command line arguments
if (process.argv.length < 3) {
    console.error('Please provide content to publish.');
    process.exit(1);
}

const contentToPublish = process.argv.slice(2).join(' ');
publishContent(contentToPublish);

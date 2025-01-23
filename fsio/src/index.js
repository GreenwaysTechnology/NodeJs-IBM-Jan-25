const fs = require('fs');

// File path
const filePath = './src/assets/info.txt';

// Step 1: Create a read stream
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
 // Step 2: Accumulate data into a buffer
let fileContent = '';
readStream.on('data', (chunk) => {
    fileContent += chunk;
});
// Handle errors during reading
readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

// Step 3: Process the content after reading
readStream.on('end', () => {
    // Modify the content
    const updatedContent =  '\nNew line added!';
    // Step 4: Write the updated content back to the same file
    writeStream.write(updatedContent);
});
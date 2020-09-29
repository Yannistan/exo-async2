import fs from 'fs'
if (process.argv.length !== 3) {
    console.log('usage: showDirFiles.js dir')
    process.exit(1)
}

let dir = process.argv[2];

fs.readdir(dir, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(function (file) {
        console.log(file);
    });
});
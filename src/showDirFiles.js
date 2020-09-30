import fs from 'fs'

if (process.argv.length !== 3) {
    console.log('usage: showDirFiles.js dir')
    process.exit(1)
}

let dir = process.argv[2];

fs.readdir(dir, function (err, files) {
    if (err) {
        return console.log('Unable to open directory: ', err);
    }

    files.forEach(function (file) {
        let path = process.argv[2]+file
        fs.readFile(path, 'utf-8', (err, data) => {console.log(data)}) 
       // console.log(file);
    });
});
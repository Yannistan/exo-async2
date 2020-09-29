import axios from 'axios'
import fs from 'fs/promises'

if (process.argv.length !== 4) {
    console.log('usage: downloadCopy.js url file')
    process.exit(1)
}

let url = process.argv[2];
let file = process.argv[3];


let response = await axios.get(url)
await fs.writeFile(`./${file}`, response.data)
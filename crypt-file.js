const fs = require('fs')
const crypto = require('crypto')

const alg = 'aes-256-ctr'
const passwd = 'abcdabcd'

const read = fs.createReadStream('input.txt')
const write = fs.createWriteStream('output.txt')
const cipher = crypto.createCipher(alg, passwd)

read.pipe(cipher).pipe(write)

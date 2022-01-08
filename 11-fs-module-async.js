// Destructure specific methods out of fs module
const { readFile, writeFile, readlinkSync } = require('fs')

// With Async need to use callbacks
console.log('Starting task...')
readFile('./content/first.txt','utf-8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8', (err, result)=> {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/third-async.txt', `Here is the result \nValue from first.txt - ${first}\nValue from second.txt - ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            writeFile('./content/third-async.txt', '\n\n<----Appending to third.txt----->', {flag: 'a'}, (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log("Done with write file task...")
            })
        })
    })
})
console.log('Starting the next task...')
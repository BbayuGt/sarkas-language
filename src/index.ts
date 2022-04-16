import fs from 'fs'
import parse from './logics'

// fileName
if (!process.argv[2]) //No argument passed
    throw new Error("File name can't be undefined, usage node ./dist filename")
if (!fs.statSync(process.argv[2]).isFile()) // File not exist
    throw new Error(`File ${process.argv[2]} does not exist.`)

// some flexing shit
const file = fs.readFileSync(process.argv[2])
const code = file.toString().replace(/\r/gm, "").split("\n").filter(x=>!!x)

const parsed = []

for (const codes of code) {
    const pr = parse(codes)
    if (pr) parsed.push(parse(codes))
}
eval(parsed.join(";"))
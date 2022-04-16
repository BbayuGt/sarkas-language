export default function print(code:string):string | null {
    const format = /kasih tau ([^\[\]\(\)\n]+) yh$/
    const match = code.match(format)
    if (!match) return null
    else return `console.log(${match[1]})`
}
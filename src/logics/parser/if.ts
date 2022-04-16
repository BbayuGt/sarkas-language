import { transform } from "../../utils/transform"

export default function ifStatement(code:string):string | null {
    const format = /moment ketika ([^\[\]\(\)\n]+) bilek$/
    const match = code.match(format)
    if (!match) return null
    else return `if (${transform(match[1])}) {`
}
import { transform } from "../../utils/transform"

export default function constant(code:string):string | null {
    const format = /([a-zA-Z0-9]+) luwh itu ([^\[\]\(\)\n]+) yh$/
    const match = code.match(format)
    if (!match) return null
    else return `const ${match[1]} = ${transform(match[2])}`
}
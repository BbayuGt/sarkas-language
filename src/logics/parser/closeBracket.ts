import { transform } from "../../utils/transform"

export default function closeBracket(code:string):string | null {
    const format = /lucu$/
    const match = code.match(format)
    if (!match) return null
    else return `}`
}
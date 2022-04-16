import closeBracket from "./parser/closeBracket";
import constant from "./parser/constant";
import ifStatement from "./parser/if";
import print from './parser/print'


export default function parse(code:string) {
    const parser = [
        constant,
        print,
        ifStatement,
        closeBracket
    ]

    let cmd

    for (const parse of parser) {
        cmd = parse(code)
        if (cmd) break
    }
    if (!cmd) return
    return cmd
}
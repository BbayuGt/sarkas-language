function transformBoolean (code:string) {
    
    if (code.match(/^btul$/))
        return "true"
    if (code.match(/^tidak btul$/))
        return "false"
}

export function transform(code:string) {
    
    const transforms = [
        transformBoolean
    ]
    
    let ret

    for (const transform of transforms) {
        ret = transform(code)
    }
    if (ret) return ret
    return code
}
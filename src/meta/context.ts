import phina from 'phina.js'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const define = (path: string) => (_class: any) => {
    phina.register(path, (...args: unknown[]) => new _class(...args))
    return _class
}


export function sum(a, b) {
    return a + b
}

export function insertFirst(value, array) {
    if (!Array.isArray(array)) return undefined
    if (!value) return undefined
    return [value, ...array]; 
}


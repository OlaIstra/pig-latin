type Collection = Record<number, string>
type Dictionary = Record<string, string>

const punctuationHash: Dictionary = {
    '.': '1',
    ',': '1',
    '"': '1',
    "'": '1',
    '?': '1',
    '!': '1',
    ';': '1',
    ':': '1',
    '(': '1',
    ')': '1',
    '{': '1',
    '}': '1',
    '[': '1',
    ']': '1',
    '/': '1',
}

const splitToArray = (str: string, sign: string): string[] => {
    return str.split(sign)
}

const joinToString = (arr: string[], sign: string): string => {
    return arr.join(sign)
}

const isHyphensFound = (str: string): boolean => {
    return str.includes('-')
}

const isVowel = (letter: string): boolean => {
    return /[aeoiu]/.test(letter)
}

const isCapital = (letter: string): boolean => {
    return letter === letter.toUpperCase()
}

const getPunctuationPosition = (arr: string[], hash: Collection, punctuationHash: Dictionary): string[] => {
    let result = []
    arr.forEach((elem, idx) => {
        if (punctuationHash[elem]) {
            hash[arr.length - 1 - idx] = elem
        } else {
            result.push(elem)
        }
    })
    return result
}

const setPunctuation = (arr: string[], hash: Collection): string[] => {
    for (let key in hash) {
        arr = [...arr.slice(0, arr.length - +(key)), hash[key], ...arr.slice(arr.length - +(key))]
    }
    return arr
}

const isWayEnd = (arr: string[]): boolean => {
    return (arr[arr.length - 1] === 'y') && (arr[arr.length - 2] === 'a') && (arr[arr.length - 3] === 'w')
}

const getCapitalPosition = (arr: string[]): number[] => {
    return arr.reduce((acc, el, idx) => isCapital(el) ? [...acc, idx] : acc, [])
}

const setArrayToLowerCase = (arr: string[]): string[] => {
    return arr.map(elem => elem.toLowerCase())
}

const setCapital = (arr: string[], arrOfCapitalPosition: number[]): string[] => {
    return arr.map((elem, idx) => arrOfCapitalPosition.includes(idx) ? elem.toUpperCase() : elem)
}

const convertWordToPigLatin = (word: string): string => {
    let hash: Collection = {}
    let arr = getPunctuationPosition(splitToArray(word, ''), hash, punctuationHash)

    if (isWayEnd(arr)) {
        return joinToString(setPunctuation(arr, hash), '')
    } else {
        let arrCapitalize = getCapitalPosition(arr)

        arr = setArrayToLowerCase(arr)

        if (isVowel(arr[0])) {
            arr = [...arr, 'w', 'a', 'y']
        } else {
            arr = [...arr.slice(1), arr[0], 'a', 'y']
        }
        arr = setCapital(arr, arrCapitalize)
    }
    return joinToString(setPunctuation(arr, hash), '')
}

const convertStringToPigLatin = (str: string): string => {
    let arr = splitToArray(str, ' ')
    let result = []

    arr.forEach((elem, i) => {
        if (isHyphensFound(arr[i])) {
            let arrHelp = splitToArray(arr[i], '-')
            let arrResult = [convertWordToPigLatin(arrHelp[0]), convertWordToPigLatin(arrHelp[1])]
            result.push(joinToString(arrResult, '-'))
        } else {
            result.push(convertWordToPigLatin(arr[i]))
        }
    })
    return joinToString(result, ' ')
}

export default convertStringToPigLatin

const str: string = 'String';
const isLoaded: boolean = true;
// const num: number = 42;
// const num: number = 4.2;
const num: number = 4e2;

const numberArray: number[] = [1, 2, 3]
const Arr: Array<number> = [1, 2, 3]

const stringArray: string[] = ["name", "surname"]

const info: [string, number, number] = ["name", 123, 11]

// function sayMyName(name: string): void {
//     console.log(name);
// }

function sayMyName(name: string, year: number): string {
    console.log(name);
    return `${name} ${year}`
}

function throwError(message: string): never {
    throw new Error(message)
}


type Login = string;
const login: Login = 'admin'

type userID = string | null | undefined;
const id1: userID = "ID"
const id2: userID = null
const id3: userID = undefined

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rectObj: Rect = {
    id: "ID",
    // color: "red",
    size: {
        width: 45,
        height: 100,
    }
}

const rectObj2 = {} as Rect

interface RectWithArea extends Rect {
    getArea: () => number
}

const rectObj3: RectWithArea = {
    id: '123',
    size: {
        width: 12,
        height: 11,
    },
    getArea() {
        return this.size.width * this.size.height
    }
}


interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}


interface Styles {
    [key: string]: string
}

const css: Styles = {
    width: "300px",
    borderBottom: "20rem"
}




enum Colors {
    Red,
    Green,
    Blue,
}

const color = Colors.Red // 0
const colorReverse = Colors[0] // red



enum Cars {
    Kia = "KIA",
    AUDI = "AUDI",
    Reanult = "Renault"
}

const audi = Cars.AUDI




function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}





const numberArray2: number[] = [1, 2, 3]
const numberArray3: string[] = ["1", "2", "3"]

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}



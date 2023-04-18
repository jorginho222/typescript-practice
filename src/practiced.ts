function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3
}

calculateTax(10_000)

// type aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'ricardo',
    retire: (date) => {
        console.log(date)
    }
}
// union types
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === 'number') return weight * 2.2
    return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')

// intersection types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal type (exact, specific)
type Quantity = 50 | 100

let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

let metric: Metric = 'inch'

// nullable types
function greet(name: string | null) {
    if (name) console.log(name.toUpperCase())
    else console.log('Bon giorno')
}

greet(null)

// optional chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear())

// optional element access operator
// customers?.[0]

// optional call
let log: any = null

log?.(4) // the right piece will be executed only if is referencing an actual function
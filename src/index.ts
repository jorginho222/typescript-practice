type Supplier = {
    readonly id: number,
    address: string,
    currentAccount: object,
}

let employee1: Supplier = {
    id: 1,
    address: 'AV siempre viva 123',
    currentAccount: {
        id: 123,
    }
}
let employee2: Supplier = {
    id: 2,
    address: 'falsa 123',
    currentAccount: {
        id: 456,
    }
}

const employees: Supplier[] = [employee1, employee2]

const getSuppliers = (): Supplier[] | void  => {
    if (employees.length > 0) return employees
}




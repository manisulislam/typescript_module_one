type User={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}
type cardnumber={
    cardnumber: string;
}
type cardDate= {
    cardDate: string;
}
type cardDetails= cardnumber & cardDate & {
    cvv: number;
}
let myUser: User= {
    _id: "1256",
    name: "Anis",
    email: "ha@gmail.com",
    isActive: true,

}

export {}

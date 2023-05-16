function addTwo(num: number){
    return num;
}

function getUpper(val: string){
    return val.toUpperCase();
}
function signUpUser(name: string, email: string, isPaid: boolean){

}
const signInUser=(name: string, email: string, isPaid:boolean=false)=>{

}
const heros =["anis", "ahad", "fahad"];
heros.map((hero):string=>{
    return `hero is ${hero}`
})
addTwo(5);
getUpper("anis");
signUpUser("anis", "ak@gmail.com", true);
signInUser("ahad","ahad@gmail.com");
export {}
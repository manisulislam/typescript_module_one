type user= {
    name: string;
    email: string;
    isActive: boolean;

}

function createUser(user: user): user{
    return {name: "", email: "", isActive: true};

}
createUser({name: "", email: "", isActive: true})
let isEven: boolean = false;
let num: number = 4;
let str: string = '';

type User = {
    name: string,
    age: number,
}

const peshoUser = {
    name:'Pesho', 
    age: 22,
} as User;

interface AnotherUser {
    firstName: string;
    id: number;
    getUserName: () => string;
}

//API call
const anotherUserList = [
    {firstName: 'Ivan', id: 1}, 
    {firstName: 'Mitko', id: 2}, 
    {firstName: 'Maria', id: 3}
] as AnotherUser[];

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;

    getUserName() {
        return this.firstName
    };
}

anotherUserList.forEach(({firstName, id}) => {

    console.log(`${id}: ${firstName}`);
    
})

peshoUser.age = 23;


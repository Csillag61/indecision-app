const square=function(x){
    return x*x;
};

const arrowFunc=(x)=>{
    return x*x;
};
// console.log(arrowFunc(8))
// const getFirstName=(fullName)=>{
//     return fullName.split(' ')[0];
// };

// 
class Person{
    constructor(name = 'Anonymous', age=0){
        this.name=name;
        this.age=age;

    }
    getGreetings(){
       //return 'Hi';
       return `Hi.I'm ${this.name} test`;

    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }

}
//sub class
class Student extends Person{
constructor(name, age, major){
    super(name, age);
    this.major=major;
}
hasMajor(){
    return !!this.major;
}
getDescription(){
    let description = super.getDescription();
    if (this.hasMajor()){
        description += `their major is ${this.major}.`;
    }
    return description;
}
}
class Traveler extends Person{
    constructor(name, age, major, location){
        super(name, age, major);
        this.location=location;

        }
        hasLocation(){
            return !!this.location;
        }
        getGreetings(){
            let greeting=super.getGreetings();
            if (this.getGreeting()){
                greeting += `their location is ${this.location}.`;
            }
            return location;
        }
    }

const me= new Traveler('Csillag', 59, 'CS', 'Stow');
console.log(Traveler.getGreetings())
//console.log(me.getDescription());

console.log(me.hasMajor());

const otherOne=new Student('Balos');
console.log(otherOne.getGreetings());
console.log(otherOne.hasMajor());


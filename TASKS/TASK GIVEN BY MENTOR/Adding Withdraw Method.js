class Account {
    constructor(name, accno, balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    get_balance() {
        return "THE BALANCE IS : " + this.balance;
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount;
            return `AFTER WITHFDRAW ${this.get_balance()}`;
        } 
        else{
            return "Insufficient Funds";
        }
    }

    deposit(amount){
        this.balance = this.balance + amount;
        return `AFTER DEPOSIT ${this.get_balance()}`;
    }
}
const govardhan = new Account("govardhan", 123, 1000000);
const arul = new Account("arul", 124, 200000);
const vaishnavi = new Account("vaishnavi", 125, 400000);

console.log(vaishnavi.get_balance());

console.log(vaishnavi.withdraw(100000));

console.log(vaishnavi.deposit(100000));
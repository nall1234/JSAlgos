class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    // methods
    backValue(){
        if (this.head == null){
            return null
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        return runner.value
    }


    back(value) {
        let newNode = new Node(value);
        if (this.head == null){
            
            this.head = newNode;
        }
        let runner = this.head;
        while( runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;   
        return this.head;     
    }

    removeback(){
        if (this.head == null){
            return null
        }
        let runner = this.head;
        while (runner.next.next != null){
            runner = runner.next;
        }
        runner.next = null

    }
}    
}


let newSLL = new SLL
let node1 = new Node(7)
newSLL.head = node1
newSLL.back(6)
console.log(newSLL.backValue())
newSLL.removeback()
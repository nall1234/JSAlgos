class Node { 
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(value){
        this.head = null;
    }

    display(){
        var string = "";
        var runner = this.head;
        while(runner != null){
            string = string + runner.val + " ";            
            runner = runner.next;
        }
        return string;
    }

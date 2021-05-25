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

    length(){
        var count = 0;
        var runner = this.head;
        while(runner != null){
            count++;            
            runner = runner.next;
        }
        return count;
    }
}
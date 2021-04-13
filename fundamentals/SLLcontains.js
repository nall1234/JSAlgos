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

    contains(value){
        var runner = this.head;
        while(runner != null){
            if (runner.val == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

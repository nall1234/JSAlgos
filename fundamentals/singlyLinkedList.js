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
    //methods go here for assignments
    front(){
        if (this.head == null){
            return null;
        }
        return this.head.val;  
    }
    removeFront(){
        if (this.head == null){
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }
    addFront(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

}

sll1 = new SLL()
node1 = new Node(7)
sll1.head = node1
node2 = new Node(10)
node1.next = node2



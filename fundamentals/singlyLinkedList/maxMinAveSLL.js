class Node { 
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    minMaxAve(){
        var runner = this.head;
        var max = this.head.val;
        var min = this.head.val;
        var total = 0
        var num = 0
        var ave = null;
        while(runner != null){
            total = total + runner.val;
            num++;
            if (runner.val < min){
                min = runner.val;
            }            
            if (runner.val > max){
                max = runner.val;
            }
            runner = runner.next;
        }   
        ave = total/num;
        return [max, min, ave];
    }
}


sll1 = new SLL()
node1 = new Node(7)
sll1.head = node1
node2 = new Node(10)
node1.next = node2

console.log(sll1.minMaxAve())

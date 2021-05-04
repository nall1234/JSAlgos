class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add (value,) {
        if (this.root == null){
            this.root = new Node(value);
            return this;
        }
        var runner = this.root;
        while(runner != null){
            if (value < runner.val){
                if (runner.left != null){
                    runner = runner.left
                }
                else{
                    var newNode = new Node(value);
                    runner.left = newNode;
                    return this;
                }
            }
            else{                
                if (runner.right != null){
                    runner = runner.right
                }
                else{
                    var newNode = new Node(value);
                    runner.right = newNode;
                    return this;
                }                
            }
        }
    }
    max (){
        if (this.root == null){
            return "there is no value in this tree"
        }
        var runner = this.root;
        while (runner != null){
            if (runner.right != null){
                runner = runner.right;
            }
            else {
                return runner.val;
            }
        }
    }
    min (){
        if (this.root == null){
            return "there is no value in this tree"
        }
        var runner = this.root;
        while (runner != null){
            if (runner.left != null){
                runner = runner.left;
            }
            else {
                return runner.val;
            }
        }
    }
    isEmpty (){
        if (this.root == null){
            return true
        }
        else {
            return false;
        }
    }

    contains(value){
        if (this.root == null){
            return true
        }
        var runner = this.root;
        while(runner != null){
            if (runner.val == value){
                return true;
            }
            else if (runner.val < value){
                runner = runner.right;
            }
            else if (runner.val > value){
                runner = runner.left;
            }
        }
        return false;
    }

    size (current_node){
        if (current_node == null){
            return 0;
        }
        var leftside = this.size(current_node.left);
        var rightside = this.size(current_node.right);
        return 1 + leftside = rightside;
    }
}

bst1 = new BST();
bst1.add(5).add(6).add(10).add(5);
console.log(bst1) 
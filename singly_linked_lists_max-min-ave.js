class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    addfront(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    max(){
        let current = this.head;
        var max = current.data;
        while (current != null){
            if (current.data > max){
                max = current.data;
            }
            current = current.next;
        }
        console.log(max);
    }

    min(){
        let current = this.head;
        var min = current.data;
        while (current != null){
            if (current.data < min){
                min = current.data;
            }
            current = current.next;
        }
        console.log(min);
    }

    ave(){
        let current = this.head;
        var sum = 0;
        var length = 0;
        while (current != null){
            sum += current.data;
            current = current.next;
            length++;
        }
        var ave = sum/length;
        console.log(ave)
    }
}

var list = new LinkedList();
list.addfront(10);
list.addfront(30);
list.addfront(40);
list.addfront(80);
list.addfront(90);
list.addfront(60);
list.addfront(-20);
list.addfront(-10);
list.addfront(0);
list.addfront(50);
list.max();
list.min();
list.ave();
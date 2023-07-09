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
            this.head = new_node
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    length(){
        let current = this.head;
        var length = 0;
        while(current != null){
            current = current.next;
            length++;
        }
        return length;
    }
}

var list = new LinkedList();
list.addfront(10);
list.addfront(30);
list.addfront(40);
list.addfront(80);
list.addfront(90);
list.addfront(60);
console.log(list.length());
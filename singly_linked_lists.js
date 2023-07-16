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

    print(){
        let current = this.head;
        while (current != null){
            console.log(current.data);
            current = current.next;
        }
    }

    addEnd(data){
        let newNode = new Node(data);
        let current = this.head;
        while(current.next!=null){
            current = current.next;
        }
        current.next = newNode;
    }

    delete(data){
        let previous = this.head;
        let current = previous.next;
        while(current.data != data){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        current = null;
    }

    sum(){
        let sum=0;
        let current = this.head;
        while(current!=null){
            sum+=current.data;
            current = current.next;
        }
        return sum;
    }
    
    contains(val){
        let current = this.head;
        while(current != null){
            if (current.data == val){
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

var list = new LinkedList();
list.addfront(10);
list.addfront(30);
list.addfront(40);
list.addfront(80);
list.addfront(90);
list.addfront(60);
list.print();
console.log(list.contains(30));
console.log(list.sum());
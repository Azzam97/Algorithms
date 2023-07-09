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

    display(){
        let current = this.head;
        var str = "";
        while (current != null){
            if (current.next != null){
                current.data += ","
                str = str + current.data;
            }
            else{
            str = str + current.data;
            }
            current = current.next;
        }
        console.log(str);
    }
}

var list = new LinkedList();
list.addfront(10);
list.addfront(30);
list.addfront(40);
list.addfront(80);
list.addfront(90);
list.addfront(60);
list.display();
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class SLL{
    constructor(){
        this.head = null;
    }

    addfront(value){
        let new_node = new Node(value);
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
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }

    removefront(){
        let current = this.head.next;
        this.head = null;
        this.head = current;
        return this;
    }

    front(){;
        if (this.head != null){
            console.log(this.head.data)
        }
        else{
            console.log(this.head);
        }
    }
}

var single_list = new SLL();
single_list.addfront(30);
single_list.addfront(20);
single_list.addfront(10);
single_list.addfront(40);
single_list.addfront(60);
single_list.removefront();
single_list.print();
single_list.front();
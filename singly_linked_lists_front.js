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
        let previous = this.head;
        let current = previous.next;
        previous = null;
        this.head = current;
        return this;
    }

    front(){
        let current = this.head;
        if (current != null){
            console.log(current.data)
        }
        else{
            console.log(current);
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
// in here we have 2 classes, whenever the child meets a certain condition it will update the parent

// note : variables decalre with var keyword, can by accessed by this[variable] globally which is a feature i am ralying on here
// note: it does not work with node, because of this related issue 

// i designed this algo because i want a timer session to update itself to the main report when ever it finishes
// it is not finished but the core concept is feasible 
// the main concept is that the child object will know the name of its parent, 
//so when ever it want to invoke a function related to parent, it will pass the parentname to somemiddle where to handle changes 


class Parent {
    _list = []
}

class Child {
    constructor(name, parentName) {
        this.name = name;
        this.parentName = parentName
        updateParent(this.parentName, this)
    }
    _list = []

    set list(value) {
        console.log('setter triggered')
        this._list.push(value)
        updateParent(this.parentName, this)
    }
}

var parent1 = new Parent()
var child1 = new Child('child1', 'parent1')

function updateParent(parentName, child) {
    this[parentName]._list.push(child)
    console.log("triggered")
}

child1.list = "nice"
console.log(parent1)


















let todo =[];


while(true){
    let req = prompt("please enter task here");
    if(req == "list")
    {
        console.log("Your all todo tasks are");
        console.log(todo);
        
    }
    if(req == "add")
    {
        let a = prompt("Enter the task to add");
        todo.push(a);
        
    }
    if(req=="delete"){
        let tdel = prompt("please enter the task you want to remove");
        let ind =todo.indexOf(tdel);
        if(ind==-1){
            console.log("Item not found");
        }
        else{
            todo.splice(ind,1);
            console.log("Item delete sucessfully");
        }   
       

    }
    if(req == "quit"){
        alert("You Quit");
        break;
    }
    else{
        alert("Invalid Command!!!")
    }
}



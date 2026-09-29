function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var Answer=document.getElementById("Answer");


if (age>=18){
    Answer.innerHTML=name + " is eligible"
}else {
    Answer.innerHTML=name + " you are still a child"
    }
}
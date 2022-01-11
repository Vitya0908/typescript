document.getElementById("gordul").addEventListener('click',allapot);

let helyzet=0;

function allapot(e){
    if(helyzet==0){
        document.getElementById("feladat").style.display="block";
        helyzet=1;
    }else{
        document.getElementById("feladat").style.display="none";
        helyzet=0
    }

}



const answers=[
    {test:'test1',answer:'B'},
    {test:'test2',answer:'A'},
    {test:'test3',answer:'B'},
    {test:'test4',answer:'B'}
]

function helyes(test){
    let a=test
    let b

    a=a-1
    console.log(answers[a].answer)
    b=a
    b=b+1
    let jo="test"
    jo+=b
    jo+=answers[a].answer
    /*if(document.getElementById(jo).checked==true){
        document.getElementById(jo).nextSibling.nextSibling.style="color: green;"
    } else{
        console.log(document.getElementById(jo).nextSibling.nextSibling)
    }*/

    let elem=document.getElementsByName("test"+test)
    console.log(elem)
    for(let i=0;i<elem.length;i++){
        if(elem[i].checked){
            if(elem[i].value==answers[a].answer){
                elem[i].nextSibling.nextSibling.style="color: green;"
               //document.getElementById("label"+elem[i].id).style="color: green;"
            }else{
                elem[i].nextSibling.nextSibling.style="color: red;"
                //document.getElementById("label"+elem[i].id).style="color: red;"
            }
        }else{
            elem[i].nextSibling.nextSibling.style="color: black;"
            //document.getElementById("label"+elem[i].id).style="color: black;"
        }
    }

}
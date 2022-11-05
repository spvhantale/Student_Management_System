
let stdatabase=JSON.parse(localStorage.getItem("studentDetails"));
displayTable(stdatabase);
function displayTable(stdatabase){
    stdatabase.forEach(element => {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=element.stname;
        let td2=document.createElement("td");
        td2.innerText=element.stemail;
        let td3=document.createElement("td");
        td3.innerText=element.stcourse;
        let td4=document.createElement("td");
        td4.innerText=element.stgender;
        let td5=document.createElement("td");
        td5.innerText=element.stphone;
        let td6=document.createElement("td");
        td6.addEventListener("click",function(){
            acceptfunction(element);
        });
        td6.innerText="Accept";
        let td7=document.createElement("td");
        td7.innerText="Reject";
        td7.addEventListener("click",function(){
            rejectfunction(element);
        });
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    });
} let acceptarr=JSON.parse(localStorage.getItem("acceptstudent")) ||[];
function acceptfunction(element,index){
    let acceptobj=element;
    acceptarr.push(acceptobj);
    localStorage.setItem("acceptstudent",JSON.stringify(acceptarr));
    element.slice(index,1);
}let rejectarr=JSON.parse(localStorage.getItem("rejectstudent")) ||[];
function rejectfunction(element){
    let rejectobj=element;
    rejectarr.push(rejectobj);
    localStorage.setItem("rejectstudent",JSON.stringify(rejectarr));
}
document.querySelector("#filter").addEventListener("change",myfilter);
// function myfilter(event){
//     event.preventDefault();
//     let ss=document.querySelector("#filter").value;
//     if(ss=="all"){
//         displayTable(stdatabase);
//     }else if(ss=="Web-Development"){

//     }else if(ss=="Android-Development"){

//     }
// }
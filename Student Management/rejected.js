// All the Code for the Rejected page goes here
let rejectst=JSON.parse(localStorage.getItem("rejectstudent"));
displayTable(rejectst);
function displayTable(rejectst){
    rejectst.forEach(element => {
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
        tr.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(tr);
    });
}
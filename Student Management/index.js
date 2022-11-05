// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",mystudentdetails);
    let studentarr=JSON.parse(localStorage.getItem("studentDetails"))||[];
    function mystudentdetails(event){
        event.preventDefault();
        let studentobj={
            stname:document.querySelector("#name").value,
            stemail:document.querySelector("#email").value,
            stphone:document.querySelector("#phone").value,
            stgender:document.querySelector("#gender").value,
            stcourse:document.querySelector("#course").value,
    }
    studentarr.push(studentobj);
    localStorage.setItem("studentDetails",JSON.stringify(studentarr));
    // displayTable()
}

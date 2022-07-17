// var myDetails;
var p;
function ajax(){
// creating an object
var xhttp = new XMLHttpRequest();
// eventlistner
xhttp.onreadystatechange = function(){
   if(this.readyState==4 && this.status==200) {
   let  myDetails = JSON.parse(this.responseText);
    
    makeTable(myDetails);
   }
};

xhttp.open("GET","list.json",true);
xhttp.send();
}

// Table formation
function makeTable(data){
    p = data.shoppinglist;
    
    var out = "<select id=mylist onchange= dept()><option  disabled selected>Department</option><option>All</option><option>Soaps</option><option>Vegetables</option><option>Rice</option></select>   <table><tr><th> SlNo.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
   
      for(let i=0;i<p.length;i++){
        out +="<tr> <th>" + p[i].SlNo +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
       }
       out+="</table>";
    document.getElementById("demo").innerHTML =out; 
    
}


function dept() {
    
    input = document.getElementById("mylist").value;   
    var out = "<select id=mylist onchange=dept()><option disabled selected>Department</option><option>All</option><option>Soaps</option><option>Vegetables</option><option>Rice</option></select>   <table id=mytable><tr><th>SlNo.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";  

    for (let i = 0; i < p.length; i++) {
        if (input == "Soaps") {
            if (p[i].Department == 'Soaps') {
                out +="<tr> <th>" + p[i].SlNo +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
            }
        }
        else if (input == "Vegetables") {
            if (p[i].Department == 'Vegetables') {
                out +="<tr> <th>" + p[i].SlNo +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
            }
        }
        else if (input == "Rice") {
            if (p[i].Department == 'Rice') {
                out +="<tr> <th>" + p[i].SlNo +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
            }
        }
        else {
            out +="<tr> <th>" + p[i].SlNo +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
        }
    }
    out += "</table>";
    document.getElementById("demo").innerHTML = out;
}
function ajax(){
// creating an object
var xhttp = new XMLHttpRequest();
// eventlistner
xhttp.onreadystatechange = function(){
   if(this.readyState==4 && this.status==200) {
    // document.getElementById("demo").innerHTML = this.responseText;
    let myDetails = JSON.parse(this.responseText);
    makeTable(myDetails);
   }
};

xhttp.open("GET","list.json",true);
xhttp.send();
}

// Table formation
function makeTable(data){
    let p = data.shoppinglist;
    var out ="<table> <tr><th>SlNo</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
    for(let i=0;i<p.length;i++){
        out +="<tr> <th>" + p[i].SlNo +"</th>" + "<th>" + p[i].Name +"</th>" +"<th>" + p[i].Quantity +"</th>" +"<th>" + p[i].Unit +"</th>" +"<th>" + p[i].Department +"</th>" +"<th>"  + p[i].Notes +"</th>"  +"</tr>";
       }
       out+="</table>";
    document.getElementById("demo").innerHTML =out; 
    document.getElementById("head").innerHTML ="<h1> Grocery shopping List </h1>"; 
}

    
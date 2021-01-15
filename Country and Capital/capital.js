function response(){
  var n = document.getElementById("in").value;
  var r = new XMLHttpRequest();
  r.open('GET','https://restcountries.eu/rest/v2/all',true);
  r.send();
  r.onload=function(){
    var data = JSON.parse(this.response);
    var k = true;
    for(var i in data){
      if(n.toLowerCase()===data[i].name.toLowerCase())
      {
        document.getElementById("out").innerHTML="Capital of "+ data[i].name + " is "+data[i].capital;
        k=false;
        break;
      }
  }
  if(k)
    document.getElementById("out").innerHTML="Country "+n+" not found!";
  }
}
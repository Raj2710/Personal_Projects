function timeconvert(utctime){
    var time = new Date(utctime);
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    return hour+":"+ min + ":"+sec;
}
function response(){
        var city = document.getElementById("in").value;
        var request1= new XMLHttpRequest();
        request1.open('GET',"http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1df01ea2c0ed525b7685b8d43188acfd",true);
        request1.send();
        window.onerror = function () {
            alert("City Not Found!")
            document.getElementById("out").innerHTML="Please Try Again!";
         }
        request1.onload  = function(){
            var data = JSON.parse(this.response);
            document.getElementById("out").innerHTML=`Place:${data.name}<br>Climate:${data.weather[0].main}
            <br>Temprature:${data.main.temp}°<br>Feels Like:${data.main.feels_like}°<br>Maximum Temperature:
            ${data.main.temp_max}°<br>Minimum Temperature:${data.main.temp_min}°<br>Sunrise:${timeconvert(data.sys.sunrise * 1000)}
            <br>Sunset:${timeconvert(data.sys.sunset * 1000)}<br>Time of Data Calculation:${timeconvert(data.dt * 1000)}`;
            document.getElementById("foot").innerHTML="&copy Nagarajan";
        }
}
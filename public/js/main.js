
let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");
const API_KEY ='b44829aa0d4242d77ac4ce54356c1057';



//har baar refresh na ho
searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';

});



const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b44829aa0d4242d77ac4ce54356c1057`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            tempicon.src="./images/thunderstorm.svg"
        }
       else  if(id<400 && id>300)
        {
            tempicon.src="./images/cloud-solid.svg"
        }
       else if(id<600&& id>500)
        {
            tempicon.src="./images/rain.svg"
        }
       else  if(id<700 && id>600)
        {
            tempicon.src="./images/snow.svg"
        }
       else  if(id<800 && id>700)
        {
            tempicon.src="./images/clouds.svg"
        }
         else if(id==800)
        {
            tempicon.src="./images/clouds-and-sun.svg"
        }



   
    }
catch(error)
{
    alert('city not found');
}

};


// for allow locations wala popup
// ()=> method of calling a fun
window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.geolocation) //ifuser allows location
{

    navigator.geolocation.getCurrentPosition((position)=>
    {

   
    
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://cors-anywhere.herokuapp.com/corsdemo";

        // const api=`` jo tab ke upar wala hai
        // $ used to fetch the data
        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b44829aa0d4242d77ac4ce54356c1057`;
        //fetch  helps return api wala thing and its json format .. so we are converting 
        fetch(api).then((response)=>{

            return response.json();


        })
//after getting data then we use
        .then (data =>
            {

                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];


                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273); //converting kelvin to  celcius 
                    if(id<300 && id>200)
                    {
                        tempicon.src="./images/thunderstorm.svg"
                    }
                   else  if(id<400 && id>300)
                    {
                        tempicon.src="./images/cloud-solid.svg"
                    }
                   else if(id<600 && id>500)
                    {
                        tempicon.src="./images/rain.svg"
                    }
                   else  if(id<700 && id>600)
                    {
                        tempicon.src="./images/snow.svg"
                    }
                   else  if(id<800 && id>700)
                    {
                        tempicon.src="./images/clouds.svg"
                    }
                     else if(id==800)
                    {
                        tempicon.src="./images/clouds-and-sun.svg"
                    }


//prints data in console
                    console.log(data);


            })



}
    
    
    
    )}


})
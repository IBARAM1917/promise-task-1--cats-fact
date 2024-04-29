   //getting all the HTML elements

const first=document.getElementById("Fact");                           
const button=document.getElementById("btn");                         

const image = document.getElementById("image");                      
 //addEventListener when click the button

button.addEventListener('click',getimages);

button.addEventListener('click',getFacts);  
  //function calling

getimages()                                                            
//async function for getting images
async function getimages(){                                                  
//fetch the api 
const uniom =await fetch("https://api.thecatapi.com/v1/images/search");               
//get the api using parse
const process2=await uniom.json();                                               
   //to put image
image.src=process2[0].url;                                                               

}

 //function to get  the list of the available facts
getFacts()                                    
//async function to get the list of the available facts
async function getFacts(){                     

  //fetch the api response

  const response=await fetch ("https://meowfacts.herokuapp.com/");   
 //get the list of the available facts    
   const process=await response.json();                                      
  //to put the data into the paragraph
  first.innerHTML=process.data;                                          
  
}
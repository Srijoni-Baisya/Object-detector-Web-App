//var to store the status of cocossd model
status = "";

img = "";

//load image
function preload(){
    img = loadImage("Cups.jpg");
}

function setup(){
    //creating the canvas and placing it in the center
    canvas = createCanvas(550,450);
    canvas.center();

    //initialize cocossd model
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);

    //updating the html element which holds the status
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded !");

    //update the status
    status = true;

    //execute cocossd model
    objectDetector.detect(img , gotResult);
}

function draw(){
    image(img,0,0,550,450);
}

//fetch the results
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

//redirect to the home page
function back(){
    window.location = "index.html";
}
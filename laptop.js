//var to store the status of cocossd model
status = "";

img = "";

//empty array to hold the results
objects = [];

//load image
function preload(){
    img = loadImage("Laptop.jpg");
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

    if(status != ""){
        for(i = 0; i < objects.length; i++){

            document.getElementById("status").innerHTML = "Status : Object Detected";

            //convert the confidence into percentage
            percent = floor(objects[i].confidence * 100);

            //set the text color
            fill("#00008b");
            //display the label
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);

            //unset the color
            noFill();
            //set the border color
            stroke("#00008b");

            //draw a rectangle around the detected object
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

//fetch the results
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        //update the empty array
        objects = results;
    }
}

//redirect to the home page
function back(){
    window.location = "index.html";
}
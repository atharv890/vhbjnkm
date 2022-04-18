function setup(){
    canvas=createCanvas(500,600);
    canvas.position(200,500);
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    modal=ml5.poseNet(video,modelloaded);
    moadl.on("pose",gotResults);
}
function modelloaded(){
console.log("modal is loaded");
}
function gotResults(results){
if(results>1){
    console.log(results);
}
}

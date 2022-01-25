function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    console.log(canvas.width+" "+canvas.height)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
console.log("Pose Net Initialized")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
}
}
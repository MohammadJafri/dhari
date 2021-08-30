mustache=0
mustache=0

function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/MH3X7yVM/dhari.jpg');
}

function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' ,gotPoses);
}
function modelLoaded()
{
  console.log("PoseNet is Initialized");
}
function draw() 
{
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  circle( mustacheX, mustacheY, 20);
  image(mustache, mustacheX, mustacheY, 30, 30);
  
}
function take_snapshot()
{
    save('myMustache.png');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.mustache.x -5;
    noseY = results[0].pose.mustache.y -5;
    console.log("nose x = " + mustacheY);
    console.log("nose x = " + mustacheY);
  }
}



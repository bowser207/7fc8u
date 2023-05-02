function setup()
{
    video = createCapture(VIDEO);
    video.size(650, 600);

    canvas = createCanvas(650, 600);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#8F5FD3');
}

function modelLoaded()
{
    console.log('PoseNet is initialized.')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
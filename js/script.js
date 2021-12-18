window.document.onkeypress = move;

let x = 50;
let y = 15;

let sites = ['home', 'about', 'projects', 'contact'];
let currentSite = 0;

function move(Ereignis)
{
    Tastencode = Ereignis.keyCode;
    let h = window.innerHeight;
    let w = window.innerWidth;
    let ball = window.document.getElementById("ball");

    if(Tastencode == 119 && y > 5)
    {
        y-=4;
    }
    else if(Tastencode == 97 && x > 5)
    {
        x-=4;
    }
    else if(Tastencode == 115 && y < 90)
    {
        y+=4
    }
    else if(Tastencode == 100 && x < 94)
    {
        x+=4;
    }

    ball.style.left=x+"%";
    ball.style.top=y+"%";

    if(x >= 85 && (y > 45 && y < 55)){
        if(currentSite != 3){
            currentSite += 1;
            console.log("right");
            console.log("new page: " + sites[currentSite]);
            centerNavigator();
            changeArrows();
        }
        console.log("noting");
    }else if(x <= 15 && (y > 45 && y < 55)){
        if(currentSite != 0){
            currentSite -= 1;
            console.log("left");
            console.log("new page: " + sites[currentSite]);
            centerNavigator();
            changeArrows();
        }
        console.log("noting");
    }else if(y >= 85 && (x > 45 && x < 55)){
        console.log("bottom");
    }
}

function centerNavigator(){
    let ball = window.document.getElementById("ball");

    x = 50;
    y = 15;

    ball.style.left=x+"%";
    ball.style.top=y+"%";
}

function changeArrows(){
    let right = window.document.getElementById("right");
    let left = window.document.getElementById("left");
    let down = window.document.getElementById("down");

    switch (sites[currentSite]){
        case "home": left.style.visibility = "hidden"; break;
        case "about": left.style.visibility = "visible"; break;
        case "projects": down.style.visibility = "hidden"; right.style.visibility = "visible"; break;
        case "contact": right.style.visibility = "hidden"; break;
    }
}

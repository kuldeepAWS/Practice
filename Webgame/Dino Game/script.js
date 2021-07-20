score = 0;
cross = true;
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 50 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 50) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 50 && offsetY < 10) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if (offsetX < 50 && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            if (aniDur > 2) {
                newDur = aniDur - 0.3;
                obstacle.style.animationDuration = newDur + 's';
            }
            console.log(obstacle.style.animationDuration);
        },300);
    }
    welcome = document.querySelector('.welcome');
    if (gameover.style.visibility == 'visible') {
        welcome.style.visibility = 'hidden';
    }
}, 50);
function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}
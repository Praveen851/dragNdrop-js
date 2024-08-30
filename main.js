let newX = 0,
    newY = 0,
    startX = 0,
    startY = 0;

const card = document.getElementById("card");

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
    newX = e.clientX - startX;
    newY = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;

    card.style.left = newX + card.offsetLeft + "px";
    card.style.top = newY + card.offsetTop + "px";
}
function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
}

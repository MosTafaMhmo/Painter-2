var container = document.getElementsByClassName("container")[0];
var cell = document.getElementsByClassName("cell")[0];
var color = document.getElementById("color");
var size = document.getElementById("size");
var pen = document.getElementById("pen");
var eraser = document.getElementById("eraser");
var shape = document.getElementsByClassName("shape")[0];
var Rect = document.getElementById("rect");
var Circle = document.getElementById("circle");
var body = document.getElementsByTagName("body")[0];
var out = document.getElementsByTagName("span")[0];
var currentcolor = "black";
var currentsize = "15px";



var draw = false;
var eras = false;
var rect = false;
var cir = false;
var action = "";
function changesize() {
    currentsize = size.value + "px";
    out.innerText = currentsize;
}
size.onchange = changesize;
function changecolor() {
    currentcolor = color.value;
}
color.onchange = changecolor;


function pendraw() {
    action = "pen"
    if (action === "pen") {
        container.onmousedown = function (e) {
            draw = true;
            console.log("pen");
        };
        container.onmousemove = function (e) {
            if (draw == true) {
                x1 = e.x;
                y1 = e.y;
                var element = cell.cloneNode(true);
                element.style.width = currentsize;
                element.style.height = currentsize;
                element.style.backgroundColor = currentcolor;
                element.style.top = (y1 - 150) + "px";
                element.style.left = x1 + "px";
                shape.before(element);

            }
        };
        container.onmouseup = function (e) {
            draw = false;
        };
    }
    else { }

}
pendraw();
function erase() {
    action = "er";
    if (action === "er") {
        container.onmousedown = function (e) {
            eras = true;
        };
        container.onmousemove = function (e) {
            var element = e.target;
            if ((eras == true) && ((element.classList.contains("cell")) || (element.classList.contains("rectangle")) || (element.classList.contains("circle")))) {
                element.remove();
            }
        };
        container.onmouseup = function (e) {
            eras = false;
        };
    }
}



function drect() {
    action = "rectangle";
    var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    console.log("rectangle")
    var element;
    if (action == "rectangle") {
        container.onmousedown = function (e) {
            rect = true;
            x1 = e.x;
            y1 = e.y;
            element = document.createElement("div");
            shape.before(element);

            element.classList.add("rectangle");
            element.style.borderRadius = "0%";
            element.style.top = (y1 - 150) + "px";
            element.style.left = x1 + "px";

        };
        container.onmousemove = function (e) {
            if (rect == true) {
                x2 = e.x;
                y2 = e.y;
                element.style.width = (x2 - x1) + "px";
                element.style.height = (y2 - y1) + "px";
                element.style.border = currentsize + " " + "solid" + " " + currentcolor;
            }
        };
        container.onmouseup = function () {
            rect = false;
        };
    }

};
function dcircle(ev) {
    action = "circle";
    var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    console.log("circle");
    var element;
    if (action == "circle") {
        container.onmousedown = function (e) {
            cir = true;
            x1 = e.x;
            y1 = e.y;
            element = document.createElement("div");
            shape.before(element);
            element.classList.add("rectangle");
            element.style.borderRadius = "50%";
            element.style.top = (y1 - 150) + "px";
            element.style.left = x1 + "px";

        };
        container.onmousemove = function (e) {
            if (cir == true) {
                x2 = e.x;
                y2 = e.y;
                element.style.width = (x2 - x1) + "px";
                element.style.height = (y2 - y1) + "px";
                element.style.border = currentsize + " " + "solid" + " " + currentcolor;
            }
        };
        container.onmouseup = function () {
            cir = false;
        };
    }
};
pen.onclick = pendraw;
eraser.onclick = erase;
Rect.onclick = drect;
Circle.onclick = dcircle;
console.log();
// var canvas = document.getElementById("canvas");
// var cotx = canvas.getContext("2d");
// cotx.fillStyle = red;
// cotx.fillRect(20, 30, 200, 200);
// var drag = false;
//                 var dragStart;
//                 var dragEnd;
//                 draw()
//                 canvas.addEventListener('mousedown', function(event) {
//                 dragStart = {
//                 x: event.pageX - canvas.offsetLeft,
//                 y: event.pageY - canvas.offsetTop
//                 }
//                 drag = true;
//                 })
                

//                 canvas.addEventListener('mousemove', function(event) {
//                 if (drag) {
//                 dragEnd = {
//                 x: event.pageX - canvas.offsetLeft,
//                 y: event.pageY - canvas.offsetTop
//                 }
//                 context.translate(dragEnd.x - dragStart.x, dragEnd.y - dragStart.y);
//                 clear()
//                 draw()
//                 }
//                 })

//                 function clear() {
//                 context.clearRect(0, 0, canvas.width, canvas.height);
// 



// var dragging = false;
//                 var dragStartLocation;
//                 var snapShot;
//                 var context;
//                 var canvas = document.getElementById("canvas");
//                 var context = canvas.getContext("2d");
//                 // context.fillStyle = 'red';
//                 // context.fillRect(20, 20, 50, 50);
                

//                 // mouse events
//                 canvas.addEventListener("mousedown", dragStart);
//                 canvas.addEventListener("mouseup", dragEnd);
//                 drawRect(canvas);
//                 //
//                 function getCanvasCoordinates(event){
//                     var x = event.clientX - canvas.getBoundingClientRect().left;
//                     var y = event.clientY - canvas.getBoundingClientRect().top;
//                     return {x:x, y:y};
//                 }

//                 function takeSnapShot(){
//                     snapShot = context.getImageData(0,0,canvas.width, canvas.height);
//                 }
//                 function restoreSnapShot() {
//                     context.putImageData(snapShot, 0, 0);
//                 }

//                 // rect
//                 function drawRect(position) {
//                     console.log(position.x, dragStartLocation.x);
//                     var w = position.x - dragStartLocation.x ;
//                     var h = position.y - dragStartLocation.y  ;
//                     context.beginPath();
//                     context.rect(dragStartLocation.x, dragStartLocation.y, w, h);
//                 }


//                     // dragstart
//                 function dragStart(event){
//                     dragging = true;
//                     dragStartLocation = getCanvasCoordinates(event);
//                     takeSnapShot();
//                 }
//                 function drag(event) {
//                     var position;
//                     if (dragging === true) {
//                     restoreSnapShot();
//                     position = getCanvasCoordinates(event);
//                     draw(position);
//                     }
//                 }

//                 function dragEnd(event) {
//                     dragging = false; 
//                     restoreSnapShot();
//                     var position = getCanvasCoordinates(event);
//                     draw(position);
//                 }
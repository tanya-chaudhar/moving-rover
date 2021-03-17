canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
background_image = nasa_mars_images_array[random_number];
rover_width = 100;
rover_height = 90;
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imagetag = new Image();
    background_imagetag.onload = upload_background;
    background_imagetag.src = background_image;

    rover_imagetag = new Image();
    rover_imagetag.onload = upload_rover;
    rover_imagetag.src = rover_image;

}

function upload_background() {
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypressed = e.keyCode;
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '39') {
        right();
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();
    }
}

function down(){
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        upload_background();
        upload_rover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        upload_background();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        upload_background();
        upload_rover();
    }
}



var start = 0;

function zoom() {

    if (start == 0) {

        w = photo.width;
        h = photo.heigth;

        photo.width = photo.width * 4;
        photo.heigth = photo.heigth * 4;

        start = 1;

    }
    else {

        photo.width = w;
        photo.heigth = h;
        start = 0;

    }

}
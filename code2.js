// title:  game title
// author: game developer
// desc:   short description
// script: js
// input: mouse

var color_red = 6
var color_white = 15

var scr_x = 240
var scr_y = 136

var scr_mid_x = 120
var scr_mid_y = 68


var box = [ [-50, -40], [12, -70], [20, 13], [-10, 30] , [-20, 40]];

var x = 0;
var y = 1;
var a = 0;

function TIC() {

    cls(color_white);

    for (i=0;i<box.length;i++) {

        v1 = box[i];
        v2 = box[((i+1) % box.length)];

        fst = transByAng(v1[x], v1[y], a);
        snd = transByAng(v2[x], v2[y], a);

        line(fst[x]+scr_mid_x, fst[y]+scr_mid_y, snd[x]+scr_mid_x, snd[y]+scr_mid_y, color_red);        
    }

    a = a + 0.1;
}

function transByAng(x, y, ang) {
    var res = [];
    res[0] = x*Math.cos(ang) - y*Math.sin(ang);
    res[1] = y*Math.cos(ang) + x*Math.sin(ang);
    return res;
}
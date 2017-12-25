// title:  game title
// author: game developer
// desc:   short description
// script: js
// input: mouse


//Памятка для дебила
/*
    Спецификация
    Экран: 240x136 пикселей, палитра 16 цветов
    Ввод: 2 джойстика с восемью кнопками (крестовина + 4 кнопки) либо мышь/сенсорный ввод
    Спрайты: 256 спрайтов 8x8 переднего плана и 256 тайлов 8x8 фона
    Карта тайлов: 240x136 ячеек, 1920x1088 пикселей
    Звук: 4 канала (с редактируемыми огибающими формы волны)
    Код: 64Kb кода на Lua / Moonscript / JavaScript
*/
/*
    Цветовая палитра
    Стандартной цветовой палитрой TIC-80 является DB16:
    Имя цвета	 Индекс	Шестнадцатеричное значение
    Чёрный          0	140C1C
    Тёмно-красный	1	442434
    Тёмно-синий	    2	30346D
    Тёмно-серый	    3	4E4A4F
    Коричневый	    4	854C30
    Тёмно-зеленый	5	346524
    Красный	        6	D04648
    Светло-серый	7	757161
    Светло-синий	8	597DCE
    Оранжевый	    9	D27D2C
    Сине-серый	    10	8595A1
    Светло-зелёный	11	6DAA2C
    Персиковый	    12	D2AA99
    Голубой	        13	6DC2CA
    Жёлтый	        14	DAD45E
    Белый	        15	DEEED6

*/

color_red = 6
color_white = 15

scr_x = 240
scr_y = 136

scr_mid_x = 120
scr_mid_y = 68

circ_rad = 50

test_a=0

function TIC() {
    cls(0)
    ms = mouse();
    at = Math.atan2(ms[1] - scr_mid_y, ms[0] - scr_mid_x);

    cos_at = Math.cos(at);
    sin_at = Math.sin(at);

    //Filling angle by triangle
    tri(circ_rad + scr_mid_x, scr_mid_y, cos_at*circ_rad + scr_mid_x, sin_at*circ_rad + scr_mid_y, scr_mid_x, scr_mid_y, color_red);

    //angle axises
    line(scr_mid_x, scr_mid_y, scr_x, scr_mid_y, 15); //zero-angle axis
    line(scr_mid_x, scr_mid_y, cos_at*200 + scr_mid_x, sin_at*200 + scr_mid_y, color_white);//mouse-angle axis
    //Radians testing line
    test_a = test_a + 0.05;
    line(scr_mid_x, scr_mid_y, Math.cos(test_a)*circ_rad + scr_mid_x, Math.sin(test_a)*circ_rad + scr_mid_y, color_white)

    //Circle drawing
    circb(scr_mid_x, scr_mid_y, circ_rad, 15);

    //Some text information
    print("Mouse X: "+ms[0], 0, 0 );
    print("Mouse Y: "+ms[1], 0, 10 );
    print("Mouse Z: "+ms[2], 0, 20 );
    print("Angle (radians): "+at, 0, 30)
    print("Angle (degrees): "+radToDeg(at), 0, 40 )
}



function radToDeg(rad)
{
    return (rad * 180) / Math.PI;
}
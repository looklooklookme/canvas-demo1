window.onload = function(){



    var mycanvas = document.getElementById("mycanvas");
    var cxt = mycanvas.getContext("2d");

    //圆弧
    // cxt.translate(200,200);
    // cxt.arc(0,0,100,Math.PI/6,Math.PI/3);
    // cxt.stroke();


    // //30度那条线
    // cxt.save();
    // cxt.moveTo(0,0);
    // cxt.rotate(Math.PI/6);
    // cxt.lineTo(100,0);
    // cxt.stroke();    
    // cxt.restore();
    

    // //60度那条线
    // cxt.save();
    // cxt.moveTo(0,0);
    // cxt.rotate(Math.PI/3);
    // cxt.lineTo(100,0);
    // cxt.stroke();
    // cxt.restore();



    cxt.beginPath();
    //定义起点
    cxt.moveTo(200,200);
    //以起点为圆心，画一个半径为100的圆弧
    cxt.arc(200,200,100,Math.PI/6, Math.PI/3);
    cxt.closePath();
    cxt.stroke();
    //先stroke后closePath就不会有连接
    








}
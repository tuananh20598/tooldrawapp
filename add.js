$(document).ready(function () {
    $(".addhinhmeo").click(function () {
        var element = $('<div class="drag" style="width: 150px"><img src="image/hinhmeo.png" style="width: 150px;z-index:9"></div>');
        element.appendTo('.draw');
        $(".drag").draggable();
    });
    $(".addhinhthoi").click(function () {
        var element = $('<img class="drag" src="image/hinhthoi.png" style="width: 190px;z-index:9">');
        element.appendTo('.draw');
        $(".drag").draggable();
    });

    $(".addhinhchunhat").click(function () {
        var element = $('<img class="drag" src="image/hinhchunhat.png" style="width: 150px;z-index:9">');
        element.appendTo('.draw');
        $(".drag").draggable();
    });

    $(".addhinhbinhhanh").click(function () {
        var element = $('<img class="drag" src="image/hinhbinhhanh.png" style="width: 190px;z-index:9;">');
        element.appendTo('.draw');
        $(".drag").draggable();
    });

    $(".adddatabase").click(function () {
        var element = $('<img class="drag" src="image/database.png" style="width: 150px;z-index: 9;">');
        element.appendTo('.draw');
        $(".drag").draggable();
    });

    $(".adddocument").click(function () {
        var element = $('<img class="drag" src="image/document.png" style="width: 150px;z-index: 9;">');
        element.appendTo('.draw');
        $(".drag").draggable();
    });

    $(".addtext").click(function () {
        var element = $('<div class="drag" style="width: 150px; z-index: 10;"><input style="text-align:center;width: 138px; border-color: #e4d9d9"></input></div>');
        element.appendTo('.draw');
        $(".drag").draggable();

    });
    $("button").click(function () {
        $(".drag").remove();
    })
});

//$(this).offset(); lấy tọa độ
//this.offsetWidth lấy chiều rộng
//this.offsetHeight lấy chiều cao


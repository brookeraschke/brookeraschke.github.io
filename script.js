$(document).ready(function () {
    var xCmp = 0;
    $(document).on("mousemove", function (ev) {

        var mouseX = ev.originalEvent.pageX
        var mouseY = ev.originalEvent.pageY

        $(".sherpa").css("top", mouseY)
        $(".sherpa").css("left", mouseX)

        if (mouseX < xCmp) {
            $("img").css("transform", "scaleX(-1)")
        } else {
            $("img").css("transform", "scaleX(1)")
        }
        xCmp = mouseX;

    })})

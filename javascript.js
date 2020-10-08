// Filter Click Work Page
function filterClick() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Title hover About Page
$("h1").hover(
    function () {
        $(this).css("text-decoration", "underline");
    },
    function () {
        $(this).css("text-decoration", "none");
    }
);

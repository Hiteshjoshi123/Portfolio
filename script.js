// $(".logo").show(5000);
// $(".logo1").show(5000);
setTimeout(() => {
    $(".left").show(1000);
    $(".left").animate({
        left: '100px',
        opacity: '1',
    });
}, 100);


setTimeout(() => {
    $(".top").show(1500);
    $(".top").animate({
        left: '120px',
        top: '250px',
        opacity: '1',
    });
}, 200);


setTimeout(() => {
    $(".right").show(500);
    $(".right").animate({
        top: '300px',
        left: '140px',
        opacity: '1',
    });
}, 2000);

setTimeout(() => {
    $(".post").show(1000);
    $(".post").addClass('floating');
}, 2500);

setTimeout(() => {
    $(".left").addClass('floating');
}, 2200);

setTimeout(() => {
    $(".top").addClass('floating');
}, 2400);

setTimeout(() => {
    $(".right").addClass('floating');
}, 2600);

$('a').click(function(){
    $(".color1").show(100);
    setTimeout(() => {
        $(".color1").hide();
    }, 2000);
})
$(".Resume").hide();
    $(".Contact").hide();
setTimeout(() => {
    $(".Resume").show(500);
},3500);
setTimeout(() => {
    $(".Contact").show(500);
},4800);

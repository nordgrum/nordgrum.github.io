//Initialization
$('[hr]').attr('vw','');

//AOS
var $aos = $('[aos], [hr]');
var $window = $(window); function ciiv(){var wh = $window.height(); var wtp = $window.scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.attr('animation','');} else {$element.removeAttr("animation");}});}
$window.on('scroll resize', ciiv); $window.trigger('scroll');

//Cursor
$('body').append('<span mdl2 cursor></span><div circle></div>');
function moveCursor(e) {TweenLite.to($('[cursor]'), 0.125, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCursor);
function moveCircle(e) {TweenLite.to($('[circle]'), 0.675, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);

$('a, button, [modal]').hover(function(){$('[cursor]').css('color', 'white'); $('[circle]').css({'background-color': 'rgba(222,0,0,0.5)', 'border': 'none'});}, function(){$('[cursor]').css('color', '#de0000'); $('[circle]').css({'background-color': 'transparent', 'border': 'solid 0.175rem white'});});

//Parallax
$(document).mousemove(function(e){
	parallaxIt(e, "[parallax=move]", 50);
});
function parallaxIt(e, target, movement){var $this = $("body"); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$("[parallax=angle]").each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * -100, rotationX: yPos * 100, ease: Power1.easeOut,});})});

//Form
var submitted=false;

//Nav Hide
var nps = window.pageYOffset;
window.onscroll = function()
{
	var ncs = window.pageYOffset;
	if (nps > ncs) {document.querySelector("body > nav").style.top = "0%";}
	else {document.querySelector("body > nav").style.top = "-4rem";} nps = ncs;
}

//Nav Mob
var nml = document.getElementById('nml').style; var nma = document.getElementById('nma').style;
function nav_links() {nml.right = "0rem"; nma.left = "-19rem";} function nav_actions() {nma.left = "0rem"; nml.right = "-19rem";}
function nav_close() {nml.right = "-19rem"; nma.left = "-19rem";}

function page_scroll()
{
	$("html, body").animate({scrollTop: $('footer p').offset().top}, 90000);
	document.getElementById("stop-demo").style = "top: 2rem;";
	document.getElementsByTagName("html")[0].style = "scroll-behavior: auto;";
}
function page_scroll_stop()
{
	jQuery('html,body').queue([]).stop();
	document.getElementById("stop-demo").style = "top: -10rem;";
	document.getElementsByTagName("html")[0].style = "scroll-behavior: smooth;";
}

function audio() {var audio = document.getElementById("audio"); if (audio.paused) {audio.play(); audio.volume = 0.375;} else audio.pause();}

var shra = document.getElementById('share').style; function share() {shra.animation = "share 0.375s ease-in infinite";}
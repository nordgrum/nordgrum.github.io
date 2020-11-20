//Form
var submitted=false; $('form').keypress(function(e) {if (e.keyCode == 13) {return false;} else {}});
$('textarea').on('input', function(){this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';});
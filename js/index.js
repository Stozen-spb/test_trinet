
// цвет лейблов

(function(){

var radios = document.querySelectorAll('input[type="radio"]');
var labels = document.getElementsByTagName('label');

for(var i=0; i<radios.length; i++) {
   
    radios[i].addEventListener('click', function(event) {
    	if ( event.target.checked == true) 
    	{
    		for (var i = 0; i < labels.length; i++) {
				labels[i].style.backgroundColor='';
			}
    		var selector = 'label[for=' + event.target.id + ']';
    		var label = document.querySelector(selector);
    		label.style.backgroundColor= '#e02222';
    	}

    });
    
}







}());

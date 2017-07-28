$(function(){
  
  $('.awesome-form .input-group input').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');
      
    }
    
  });
  
});

function myFunction() {
    var x = document.getElementById('form');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'block';
    }
}
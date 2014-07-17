$(document).ready(function(){
    $('#plusBtn').on('click', function(){
    var xValue = parseInt( $('#xInteger').val(), 10);
    var yValue = parseInt( $('#yInteger').val(), 10);
    var result = xValue + yValue;
    if($.isNumeric(xValue) && $.isNumeric(yValue) ){
      $('#result').html(result);
      $('input').val("");
    }else{
      alert('please enter a number, no empty fields allowed either!');
      $('input').val("");
    }
  });
    
  $('#minusBtn').on('click', function(){
    var xValue = parseInt( $('#xInteger').val(), 10);
    var yValue = parseInt( $('#yInteger').val(), 10);
    var result = xValue - yValue;
    if($.isNumeric(xValue) && $.isNumeric(yValue) ){
      $('#result').html(result);
      $('input').val("");
    }else{
      alert('please enter a number, no empty fields allowed either!');
      $('input').val("");
    }
  });
});

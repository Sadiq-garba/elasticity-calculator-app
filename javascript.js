$(document).ready(function(){
      
      function calcElasticity(newq,oldq,newp,oldp){

    var result = ((newq-oldq)/oldq) /  ((newp-oldp)/oldp) * (oldp/oldq);
        
     var ans = result.toFixed(3);   
 
      if(result < 1){
      
        $('#show').html(ans + ' it is inelastic');

      }
     if(result === 1){

        $('#show').html(ans + ' it is unitary elastic');


      }
      if(result > 1){

        $('#show').html(ans + ' it is  elastic' )


      }

  }

  $("#calc").click(function(){
    
    var oldqq = $('#oldq').val();
    var newqq = $('#newq').val();
    var oldpp = $('#oldp').val();
    var newpp = $('#newp').val();

   calcElasticity(newqq,oldqq,newpp,oldpp)



    })

});





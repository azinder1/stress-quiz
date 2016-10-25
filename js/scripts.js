var stressCalculation = function(variable1, variable2, variable3){
  var negStress = variable3.length +variable2.length - variable1.length;

  if (negStress >= 8 ){
    return 1;
  } else if (negStress < 8 && negStress >4 ){
    return 2;
  } else{
    return 3;
  }
}

$(function(){


  $("form#stress-survey").submit(function(event){
    event.preventDefault();
    var userReliefResponses =[];
    var userPhysicalResponses = [];
    var userOutwardResponses = [];
    $("input:checkbox[name=stress-relief]:checked").each(function(){
      //debugger;
      var reliefResponses = $(this).val();
      userReliefResponses.push(reliefResponses);
    });
    $("input:checkbox[name=medical-symptoms]:checked").each(function(){
      var physicalResponses = $(this).val();
      userPhysicalResponses.push(physicalResponses);
    });
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var outwardResponses = $(this).val();
      userOutwardResponses.push(outwardResponses);
    });
    var suggestion =stressCalculation(userReliefResponses,userPhysicalResponses,userOutwardResponses);
    if (suggestion === 1){
      $("#stress-suggest h4").text("You are super stressed, get some help")
    } else if ( suggestion == 2){
      $("#stress-suggest h4").text("Hang in there, buddy.  Don't forget to breathe.")
    }else {
      $("#stress-suggest h4").text("Attaboy, keep up that stress-free lifestyle!")
    }
  });
});

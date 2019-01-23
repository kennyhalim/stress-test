$(document).ready(function(){
  $("#stressSurvey").submit(function(event){
    event.preventDefault();

    var emotions = [];
    var symptoms = [];
    var habits = [];

    $("input:checkbox[name=feel]:checked").each(function(){
      var emotionInput = $(this).val();
      emotions.push(emotionInput);
    });

    $("input:checkbox[name=health]:checked").each(function(){
      var symptomInput = $(this).val();
      symptoms.push(symptomInput);
    });

    $("input:checkbox[name=coping]:checked").each(function(){
      var habitInput = $(this).val();
      habits.push(habitInput);
    });
  if (emotions.length <= 2 && symptoms.length <= 2 && habits.length >= 3){
    $("#stressSurvey").hide();
    $("#positiveResult").show();
  } else if (emotions.length === 3 && (symptoms.length > 2 && symptoms.length < 6) && habits.length <=3) {
    $("#stressSurvey").hide();
    $("#neutralResult").show();
  } else {
    $("#stressSurvey").hide();
    $("#negativeResult").show();
  }
  });
});

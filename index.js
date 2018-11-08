$(function(){

  $("#my_btn").click(function(){

    var rule_text = $("#rule_text").val();
    var rule_name = $("#rule_name").val();
    
    $("#rule_text_box").html(rule_text)
    $("#rule_name_box").html(rule_name)

    $("#rule_result").html(true)

    console.log(RE(rule_text.split(","),rule_name))

  })

  $("#tag_box label input").click(function(){
    var tmp = "";
    var elem_arr = $("#tag_box input");
    for(var i = 0; i < elem_arr.length; i++){
      if(elem_arr.eq(i).is(':checked')){
        tmp += elem_arr.eq(i).val() + ","
      }
    }
    var tmp_arr = tmp.split(",");
    tmp_arr.pop();
    tmp_str = tmp_arr.join(",");
    $("#rule_text").val(tmp_str)
  })

  

})
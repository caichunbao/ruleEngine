/**
 * created by chunbao.cai on 2018-11-7
 * 
 * @description: 实现与或非的功能
 * @param: target(Array)
 * @param: rule
 * 
 */

(function(){

  var RE = function(target,rule){
    return new RE.prototype.init(target,rule);
  };

  RE.prototype = {
    constructor:RE,
    init:function(target,rule){
      this.check(target,this.handle_rule(rule))
    },
    check:function(target_arr,rule_arr){
      
      console.log(target_arr,rule_arr)

      var arr = [1,2,3,4,5,6,7];
      var str = "123";
      var str_arr = str.split('');
      
      str_arr.forEach(function(item){
        if(arr.indexOf(Number(item)) == -1){
          return false;
        }
      })
    },
    handle_rule:function(rule){
      var tmp_result = []
      var rule_arr = rule.split("&");

      var rule_arr1 = rule_arr.map(function(item){
        item = item.replace(/\)/g,"").replace(/\(/g,"")
        return item;
      })

      for(var j = 0; j < rule_arr1[0].split("||").length; j++){
        for(var k = 0; k < rule_arr1[1].split("||").length; k++){
          tmp_result.push(rule_arr1[0].split("||")[j] + "" + rule_arr1[1].split("||")[k])
        }
      }

      return tmp_result;
    }
  }

  RE.prototype.init.prototype = RE.prototype;


  window.RE = RE;

})(window)
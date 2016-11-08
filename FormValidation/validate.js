$(document).ready(function(){

  $("#demoForm").validate({
    debug:false,
    rules:{
      username:{
        required:true,
        minlength:2,
        maxlength:10,
      //  postcode:true,
        //remote:"remote.json"
        // remote:{
        //   url:"remote.json",
        //   type:"post",
        //   data:{
        //     loginTime:function(){
        //       return+new Date();
        //     }
        //   }
        // }

        // email:true,
        // url:true,
        // date:true
      },
      password:{
        required:true,
        minlength:2,
        maxlength:10,
      }
    },

    messages:{
      username:{
        required:"必须填写用户名",
        minlength:"用户名最少2位",
        maxlength:"用户名最多10位",
      },
      password:{
        required:"必须填写密码",
        minlength:"密码最少2位",
        maxlength:"密码最多10位",
      }
    },

  });

  // $.validator.addMethod("postcode",function(value,element,params){
  //     var postcode=/^[0-9]{6}$/;
  //     return this.optional(element)||(postcode.test(value));
  // },"请填写正确的邮编！");

});

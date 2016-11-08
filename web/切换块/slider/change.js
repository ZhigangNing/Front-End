function show(x) {
  clearInterval(auto_timer);
    var li = document.getElementsByTagName('li');
    var div = document.getElementById("tabs");
    var div1 = div.getElementsByTagName('div');
    for (var i = 0; i < li.length; i++) {
        if (li[i] == x) {
            div1[i].className = 'show';
            li[i].className = "on";
            index=i;
        } else {
            div1[i].className = 'hidden';
            li[i].className = "";
        }
    }

    auto_timer = setInterval(function() {
        index = index % 3
        change(index);
        index++;
    }, 3000);
}


window.onload = function() {
    var index = 0;
    auto_timer = setInterval(function() {
        index = index % 3
        change(index);
        index++;
    }, 3000);
}

function change(x){
  var li = document.getElementsByTagName('li');
  var div = document.getElementById("tabs");
  var div1 = div.getElementsByTagName('div');
  for (var i = 0; i < li.length; i++) {
      if (i == x) {
          div1[i].className = 'show';
          li[i].className = "on";
      } else {
          div1[i].className = 'hidden';
          li[i].className = "";
          console.log(i);
      }
  }
}

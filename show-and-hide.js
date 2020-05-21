// JavaScript Document

function account() {
  var x = document.getElementById("add-account");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function privacy() {
  var x = document.getElementById("privacy-settings");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function agreement() {
  var x = document.getElementById("user-agreement");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function bug() {
  var x = document.getElementById("report-a-bug");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function policy() {
  var x = document.getElementById("content-policy");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function show() {
  var x = document.getElementById("cars-group");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function() {
    var yes= false;
    $("#btn-yes").click(function() {
          if(yes) {
              $("#btn-yes").text("No").css("backgroundColor", "red");
              yes=false;
          }
          else {
              $("#btn-yes").text("Yes").css("backgroundColor", "green");
              yes=true;
          }
     })
    var yes_two= false;
    $("#btn-yes_two").click(function() {
          if(yes_two) {
              $("#btn-yes_two").text("No").css("backgroundColor", "red");
              yes_two=false;
          }
          else {
              $("#btn-yes_two").text("Yes").css("backgroundColor", "green");
              yes_two=true;
          }
     })
})



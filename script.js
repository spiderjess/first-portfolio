// Collapsible Skills List

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

// Collapsible Project on Mobile

var coll = document.getElementsByClassName("collapsibleProject");
var k;

for (k = 0; k < coll.length; k++) {

  coll[k].addEventListener("click", function () {
    this.classList.toggle("active");
    var contentProject = this.nextElementSibling;
    if (contentProject.style.display === "block") {
      contentProject.style.display = "none";
    } else {
      contentProject.style.display = "block";
    }
  });
};

// Mobile resize change project to collapsible
// console.log($(window).width());

$(window).resize(function () {
  if (($(document).width() > 420)) {
    $(".projectInfo").show();
    $(".projectArrow").show();
    $(".collapseProjectContainer").hide();
  }
  else {
    $(".projectInfo").hide();
    $(".projectArrow").hide();
    $(".collapseProjectContainer").show();
  }
});

$(window).ready(function () {
  if (($(document).width() > 420)) {
    $(".projectInfo").show();
    $(".projectArrow").show();
    $(".collapseProjectContainer").hide();
  }
  else {
    $(".projectInfo").hide();
    $(".projectArrow").hide();
    $(".collapseProjectContainer").show();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var accordion = document.getElementById("accordion");
  var cards = accordion.querySelectorAll(".card");

  $("#accordion").on("show.bs.collapse", function (e) {
    var card = e.target.closest(".card");
    var header = card.querySelector(".card-header");
    var iconPlus = header.querySelector(".bi-plus-circle-fill");
    var iconMinus = header.querySelector(".bi-dash-circle-fill");

    if (iconPlus && iconMinus) {
      iconPlus.classList.add("d-none");
      iconMinus.classList.remove("d-none");
    }
  });

  $("#accordion").on("hide.bs.collapse", function (e) {
    var card = e.target.closest(".card");
    var header = card.querySelector(".card-header");
    var iconPlus = header.querySelector(".bi-plus-circle-fill");
    var iconMinus = header.querySelector(".bi-dash-circle-fill");

    if (iconPlus && iconMinus) {
      iconPlus.classList.remove("d-none");
      iconMinus.classList.add("d-none");
    }
  });
});

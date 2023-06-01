$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("button[type='reset']").click(function () {
    $("form").slideUp();
  });

  let tarefas = [];

  $("form").on("submit", function (e) {
    e.preventDefault();

    const newTarefa = $("input").val();

    if (tarefas.includes(newTarefa)) {
      alert(`${newTarefa} já foi inserida!`);
    } else {
      tarefas.push(newTarefa);

      $(`<li>${newTarefa}</li>`).appendTo("ul");
      $("input").val("");
    }
  });

  $("ul").on("click", "li", function (e) {
    $(e.target).toggleClass("lineTarefa");
  });
});

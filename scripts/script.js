$(document).ready(function () {

  //máscara para o cpf
  $("#cpf").mask("000.000.000-00");

  // máscara para o telefone
  $("#telefone").mask("(00) 00000-0000");

  //máscara para o cep
  $("#cep").mask("00000-000");

  // validação para os campos do formulario
  $("form").validate({
    rules: {
      nomeCompleto: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      cpf: { required: true },
      bairro: { required: true },
      rua: { required: true },
      cidade: { required: true },
      cep: { required: true },
      numero: { required: false },
    }
  });
});

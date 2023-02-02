# language: pt

  Funcionalidade: Realizar login
    Eu como usuária do site seu barriga
    Quero fazer login
    Para ter acesso a pagina principal

    //tag
  Cenario: Realizar login com usuario default
    Dado que eu estou na página de login
    Quando eu insiro email
    E insiro a senha
    E clico no botão Entrar
    Entao o sistema realiza o login com sucesso
    E exibe mensagem de bem vindo
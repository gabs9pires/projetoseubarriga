# language: pt

  Funcionalidade: Login
    Eu como usuária do site seu barriga
    Quero fazer login
    Para ter acesso a pagina principal


  Cenario: Realizar login com usuario default
    Dado que eu estou na pagina de login
    Quando eu insiro email
    E insiro a senha
    E clico no botao Entrar
    Entao o sistema realiza o login com sucesso
    E exibe mensagem de bem vindo
# language: pt

  Funcionalidade: Login
    Eu como usuária do site seu barriga
    Quero fazer login
    Para ter acesso a pagina principal


    Esquema do Cenário: Realizar login com usuario default
      Dado que eu estou na pagina de login
      Quando eu insiro email '<email_login>'
      E insiro a senha '<senha_login>'
      E clico no botao Entrar
      Entao o sistema realiza o login com sucesso
      E exibe mensagem de bem vindo

      Exemplos:
        | email_login    | senha_login |
        | gabriela@pires | 123456      |
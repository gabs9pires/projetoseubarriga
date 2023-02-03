# language: pt

Funcionalidade: Login - Contas - Adicionar
  Eu como usuária do site seu barriga
  Quero criar uma conta
  Para realizar transações


  Esquema do Cenário: Adicionar conta
    Dado que eu estou na pagina do login
      E insiro email '<email_conta>'
      E insiro senha '<senha_conta>'
      E clico no botao para Entrar
      E clico no menu Contas
      E seleciono o submenu Adicionar
    Quando eu insiro o nome '<conta_nome>' da conta
      E clico no botao Salvar
    Entao o sistema abre a lista de contas
      E valido a mensagem de sucesso
      E eu encontro minha conta '<conta_nome>'

    Exemplos:
    |  email_conta |senha_conta|  conta_nome  |
    |gabriela@pires|   123456  |Conta Poupança|
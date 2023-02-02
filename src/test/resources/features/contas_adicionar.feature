# language: pt

Funcionalidade: Contas - Adicionar
  Eu como usuária do site seu barriga
  Quero criar uma conta poupança
  Para guardar dinheiro


  Esquema do Cenário: Adicionar conta
    Dado que eu estou na pagina home
      E clico no menu Contas
      E seleciono o submenu Adicionar
    Quando eu insiro o nome '<conta_nome>' da conta
      E clico no botao Salvar
    Entao o sistema abre a lista de contas
      E valido a mensagem de sucesso
      E eu encontro minha conta '<conta_nome>'

    Exemplos:
    |conta_nome|
    |Conta Poupança|
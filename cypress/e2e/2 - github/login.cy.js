describe('Login de usuário na udemy', () => {

  beforeEach(() => {
    // caminho definido no baseUrl no cypress.config.js
    cy.visit('/')
  })

  it('fazer login de um usuário válido no github', () => {
      // função criada em gui_commands.js, parametros usados do .env
      cy.loginGithub(Cypress.env('userName'), Cypress.env('password'));
      // inspencionado do cypress
      cy.get('.details-overlay > .Header-link > .avatar').click();
      // checa na tela se existe um strong com um texto lucasheverton
      cy.contains('strong', 'lucasheverton');
      // checa na tela se existe um botão com um texto Sign out
      cy.contains('button', 'Sign out');
      
  })

})

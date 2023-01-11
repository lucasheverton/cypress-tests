describe('Buscar informações de usuário', () => {
  const githubUser = require('../../fixtures/github-user.json');

  it('teste de login de usuário valido', () => {
    cy.request({
      method: 'GET',
      url: `https://api.github.com/users/${githubUser.validGithubUser}`
    }).then((response) => {
      cy.log('API RESPONSE: ', response);
      expect(response.status).to.be.equal(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.have.property('public_repos');
      expect(response.body.public_repos).to.be.greaterThan(0);
    })  
  })
})

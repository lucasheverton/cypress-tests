describe('Buscar fotos e dados', () => {

  it('Buscar fotos do flavio', () => {

    //flaky teste
    const tempoEsperado = Math.random() * 2000;

    cy.request({
      method: 'GET',
      url: 'https://apialurapic.herokuapp.com/flavio/photos'
    }).then((res) => {
      cy.log('resposta da api', res)
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[0]).to.have.property('description')
      expect(res.body[0].description).to.be.equal('Farol iluminado')
      expect(res.duration).to.be.lte(tempoEsperado)
    })
  })

  it.only('Fazer login do flavio', ()=> {
    cy.request({
      method: 'POST',
      url: 'https://apialurapic.herokuapp.com/user/login',
      body: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('id')
      expect(res.body.id).to.be.equal(1)      
      expect(res.body).to.have.property('email')
      expect(res.body.email).to.be.equal("flavio@alurapic.com.br")   
    })
  })
})

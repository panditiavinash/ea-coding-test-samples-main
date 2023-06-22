
import { FestivalHelpers } from './helpers/festivalsDataValidation'

describe('EA Coding Test', () => {
  const festivalHelpers = new FestivalHelpers();
  it('Festivals Web Page Validations', () => {
    cy.visit('http://localhost:4200/festivals')
    festivalHelpers.festivalsEA('//ol/li')
  })
})

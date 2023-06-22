
import { FestivalHelpers } from './helpers/festivalsDataValidation'

describe('EA Coding Test', () => {
  const festivalHelpers = new FestivalHelpers();
  it('Festivals Web Page Validations', () => {
    cy.visit('http://localhost:4200/festivals') // open a web page
    cy.title().should('eq', 'EaCodingTest');
    festivalHelpers.festivalsEA('//ol/li') // validates the data inside the web page
  })
})

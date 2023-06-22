
import { FestivalHelpers } from './helpers/festivalsDataValidation';
import { festivalsURL } from './helpers/baseUrl';

describe('EA Coding Test - Festivals Web UI', () => {
  const festivalHelpers = new FestivalHelpers();

  beforeEach(() => {
    cy.visit(festivalsURL)
  })

  // validates the title of the web page
  it('Festivals Web Page Title Validation', () => {
    cy.title().should('eq', 'EaCodingTest'); 
  })

  // validates the festival data inside the web page
  it('Festivals Data Validations In Web Page', () => {
    festivalHelpers.festivalsEA('//ol/li') 
  })
})

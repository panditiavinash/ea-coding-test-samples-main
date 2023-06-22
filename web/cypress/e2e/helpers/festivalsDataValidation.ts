
import { fs } from './testData'

export class FestivalHelpers {

    public festivalsEA(xpath: string) {
        cy.xpath(xpath).should('be.visible').then(elements => {
            const length: any = elements.length;
            for (let i = 1; i <= length; i++) {
                cy.xpath(`//ol/li[${i}]`).then(elements => {
                    cy.wrap(elements).should('be.visible').invoke('text').then(text => {
                        this.festivalsDataValidation(text);
                    });
                });
            }
        });
    }

    public festivalsDataValidation(festival: any) {
        let fsNew = fs.map((str) => str.replace(/\s/g, ''));
        expect(fsNew).to.include(festival.replace(/\s/g, ''))
    }
}


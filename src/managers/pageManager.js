'use strict'

const repository = require('../repositories/pageRepository');
const pageDTO = require('../dtos/pageDTO.js');
const environment = require('../environment/environment.js');

const services = {
    getPageByNumber: async (pageNumber, bookId, isHTML) => {

        const page = await repository.getPage(pageNumber, bookId);
        const mappedPage = page.map(page => page.dataValues)[0];
        const pageResponse = new pageDTO(mappedPage.id, mappedPage.description, mappedPage.number);
        isHTML === 'true' ? isHTML = true : isHTML = false;
        if (isHTML) {
            return {
                body: environment.htmlTemplate.replace('[PageNumber]', pageResponse.number)
                    .replace('[Description]', pageResponse.description),
                contentType: 'text/html'
            }
        } else {
            return {
                body: JSON.stringify(pageResponse),
                contentType: 'application/json'
            }
        }
    },
    getPagesByBookId: async (bookId) => {

        const pages = await repository.getPagesByBookId(bookId);
        const pagesResponse = pages.map(page => new pageDTO(page.id, page.description, page.number));

        return JSON.stringify(pagesResponse);
    }
}

module.exports = services;
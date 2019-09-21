'use strict'

const repository = require('../repositories/pageRepository')

const services = {
    getPageById: async (id, bookId) => {
        const page = await repository.getPage(id, bookId);
        const mappedPage = page.map(page => page.dataValues)[0];
        const pageResponse = {
            id: mappedPage.id,
            description: mappedPage.description
        }
        return pageResponse;
    }
}

module.exports = services;
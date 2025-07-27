const Fine = require('../model/fine.model');
const { dbHelper } = require('../helper');

module.exports = {
    createFine: async (fineData, next) => {
        try {
            const fine = await dbHelper.create(Fine, fineData, next);
            return fine;
        } catch (e) {
            console.error("Error in createFine:", e.toString());
            next(e);
        }
    },

    getFinesByUser: async (userId, next) => {
        try {
            const fines = await dbHelper.findAll(Fine, { userId }, {}, next);
            return fines;
        } catch (e) {
            console.error("Error in getFinesByUser:", e.toString());
            next(e);
        }
    }
};

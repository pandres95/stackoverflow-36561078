'use strict';

describe('User', () => {
    let booljs = require('bool.js');
    var model;

    before(() => {
        return booljs('me.pandres95.stackoverflow.q36561078')
        .run().then(api => {
            model = new api.app.models.User();
            return q.nbind(model.collection.remove, model.collection)();
        });
    });

    it('Create a new user', () => {
        const newUser = {
            email: 'doe@example.com',
            password: '1234567890'
        };
        return expect(model.signup(newUser)).to.eventually.eql(newUser);
    });


});

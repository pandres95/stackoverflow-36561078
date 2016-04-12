'use strict';

describe('User', () => {
    let booljs = require('bool.js');
    var model;

    const newUser = {
        email: 'doe@example.com',
        password: '1234567890'
    };

    before(() => {
        return booljs('me.pandres95.stackoverflow.q36561078')
        .run().then(api => {
            model = new api.app.models.User();
            return q.nbind(model.collection.remove, model.collection)();
        });
    });

    it('Create a new user', () => {
        return expect(model.signup(newUser)).to.eventually.eql(newUser);
    });

    it('List users', (done) => {
        model.find((err, list) => {
            if(err) return done(err);
            expect(list).to.have.length(1);
            expect(list[0]).to.have.property('email', newUser.email);
            expect(list[0]).to.have.property('password', newUser.password);
            done();
        });
    });


});

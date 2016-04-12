'use strict';

module.exports = function (app, Schema) {

    var userSchema = new Schema({
        email: String,
        password: String
    });

    userSchema.statics.signup = function (data) {
        return new Promise((resolve, reject) => {
            this.findOne({
                email: data.email
            }, (err, existingUser) => {
                if(err) return reject(err);
                if(existingUser) return reject();
                return this.create(data, (err) => {
                    if(err) return reject(err);
                    return resolve(data);
                });
            });
        });
    };

    return userSchema;
};

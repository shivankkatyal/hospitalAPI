const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'covid19'
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done){
    Doctor.findById(jwtPayload._id).then(function(doctor) {
        if (doctor) {
            // return doctor
            return done(null, doctor);
        } else {
            // doctor not found
            return done(null, false);
        }
    }).catch(function(err){
        console.log("Error in finding the doctor from JWT", err);
        return done(err, false);
    });// doctor info is stored encoded in Payload after jwt token is formed and from there id is taken
}));// no password required since id was encoded and unique safe untill someone finds out your id
//password and username/email will checked while creating jwt

module.exports = passport;
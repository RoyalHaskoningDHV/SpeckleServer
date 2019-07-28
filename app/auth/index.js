'use strict'
const exphbs = require( 'express-handlebars' )
const passport = require( 'passport' )
const redis = require( 'redis' )
const ExpressSession = require( 'express-session' )
const RedisStore = require( 'connect-redis' )( ExpressSession )


const User = require( '../../models/User' )
const ActionToken = require( '../../models/ActionToken' )
const SendEmailVerification = require( '../../app/email/index' ).SendEmailVerification

let redirectUrls = process.env.REDIRECT_URLS.split( ',' ).filter( r => r !== '' )
redirectUrls.push( process.env.CANONICAL_URL )

module.exports = function ( app, express ) {

  app.engine( '.hbs', exphbs( { extname: '.hbs' } ) )
  app.set( 'view engine', '.hbs' )

  passport.serializeUser( ( user, done ) => done( null, user ) )
  passport.deserializeUser( ( user, done ) => done( null, user ) )

  let sessionMiddleware = ExpressSession( {
    store: new RedisStore( { client: redis.createClient( process.env.REDIS_URL ) } ),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  } )

  let redirectCheck = ( req, res, next ) => {
    // TODO
    next()
  }

  let LocalStrategy = require( './local' ).init( app, express, sessionMiddleware, redirectCheck )
  let Auth0Strategy = require( './auth0' ).init( app, express, sessionMiddleware, redirectCheck )
  let AzureStrategy = require( './azure-ad' ).init( app, express, sessionMiddleware, redirectCheck )

  let strategies = [ LocalStrategy, Auth0Strategy, AzureStrategy ]

  app.get( '/signin', ( req, res ) => {
    res.send( strategies )
  } )
}

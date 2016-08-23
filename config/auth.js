// will hold all our client secret keys (facebook, twitter, google)
// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1603936839904015', // your App ID
        'clientSecret'  : '7b36cd9b010138fd7e6283152f8e7d20', // your App Secret
        // 'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
        'callbackURL'   : 'https://mighty-island-26750.herokuapp.com/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};

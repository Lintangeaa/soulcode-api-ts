const ecosystem = [
  {
    name: 'soulcode-api-ts',
    script: './dist/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '200M',
    env: {
      NODE_ENV: 'development',
      PORT: 5000,
      DATABASE_URL: 'mysql://user:password@localhost:3306/dbname',
      VERIFY_TOKEN:
        'EAAP9ticn5usBO4ZB5I3nUq4AExwH87D3X36gK9R6Mq14M7h5Qk8z4XjTZBKPJzpNKZCcPl6YJSwplLhUkp30CvlxDADqc84ZAJZCkqsvwLNkYefCbAWBFmjESd9EZB1zzhBj53x52Jbsvxjf0g3qIdxAEeqbZC7uCKt88JDeUC7ZCAYjSE2eQBZCalQL9LTQ2OGInjNDymcTUEGmKUsnGGZA5GgirOhaYZD',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000,
      DATABASE_URL: 'mysql://user:password@localhost:3306/dbname',
      VERIFY_TOKEN:
        'EAAP9ticn5usBO4ZB5I3nUq4AExwH87D3X36gK9R6Mq14M7h5Qk8z4XjTZBKPJzpNKZCcPl6YJSwplLhUkp30CvlxDADqc84ZAJZCkqsvwLNkYefCbAWBFmjESd9EZB1zzhBj53x52Jbsvxjf0g3qIdxAEeqbZC7uCKt88JDeUC7ZCAYjSE2eQBZCalQL9LTQ2OGInjNDymcTUEGmKUsnGGZA5GgirOhaYZD',
    },
  },
];

module.exports = { apps: ecosystem };

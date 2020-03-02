'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.

const uuidv4 = require('uuid/v4');

const BATCH_SIZE = 60;

function generateRandomData(userContext, events, done) {
    console.log(`userCOntext ${JSON.stringify(userContext)}`);
    console.log(`event ${JSON.stringify(event)}`);
  // generate data with Faker:

  let batchData = []
  for (let i = 0; i < BATCH_SIZE; i++) {
      batchData.push({
        PutRequest: {
            Item: {
                uid: {
                    S: uuidv4()
                },
                data: {
                    S: "test data"
                }
            }
        }
    });
  }
  userContext.vars.batchData = batchData
  userContext.vars.uuid = uuidv4();
  
  // continue with executing the scenario:
  return done();
}
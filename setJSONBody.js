// JS Custom file
"use strict";

const uuidv4 = require("uuid/v4");
const BATCH_SIZE = 25;

module.exports = { setJSONBody };

function setJSONBody(requestParams, context, ee, next) {
    console.log(`context ${JSON.stringify(context)}`);
  let batchData = [];
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

  requestParams.json = JSON.parse(JSON.stringify({
    RequestItems: {
      test25k: batchData
    },
    ReturnConsumedCapacity: 'TOTAL'
  }));
  return next();
}

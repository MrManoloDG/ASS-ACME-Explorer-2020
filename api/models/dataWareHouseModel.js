
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataWareHouseSchema = new mongoose.Schema({
    //The average, the minimun, the maximum, and the standard deviation of the number of trips managed per manager
    TripsPerManager:{
        average: Number,
        minimum: Number,
        maximum: Number,
        stdev: Number,
    },
    //The average, the minimum, the maximum, and the standard deviation of the number of applications per trip
    ApplicationsPerTrip:{
        average: Number,
        minimum: Number,
        maximum: Number,
        stdev: Number,
    },
    //The average, the minimum, the maximum, and the standard deviation of the price of the trip
    PriceTrip:{
        average: Number,
        minimum: Number,
        maximum: Number,
        stdev: Number,
    },
    //The ratio of applications grouped by status
    ratioApplications: {
      type: Map
    },
    //The average price range that explorers indicate in their finders
    averagePriceRangeExplorers: Number,
    Top10keywords: [{
      type: String
    }],
    computationMoment: {
      type: Date,
      default: Date.now
    },
    rebuildPeriod: {
      type: String
    }
}, { strict: false });

DataWareHouseSchema.index({ computationMoment: -1 });

module.exports = mongoose.model('DataWareHouse', DataWareHouseSchema);
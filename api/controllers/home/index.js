module.exports = {


  friendlyName: 'Index',


  description: 'Index home.',


  inputs: {

  },


  exits: {

  },


  fn: async function (_, exists) {

    // All done.
    exists.success({message: 'Sails User authentication API'})

  }


};

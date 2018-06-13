var trainingDataTemplate = {
  nonRecurrent: function (inputType, inputKey) { //keyVals, array,
    if (inputType === 'keyVals') {
      var template = {
        input : {
          inputKey:0
        },
        output: {

        },
      }
      return template
    }
    else if (inputType === 'array') {
      var template = {
        input : {
          inputKey: [0, 1]
        },
        output: {

        },
      }
      return template
    }
  },

  LSTM: function (inputType, inputKey) {},
}

console.log(trainingDataTemplate.nonRecurrent('array', 'elf'));

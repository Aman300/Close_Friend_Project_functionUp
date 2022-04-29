const Animal = require('../model/Animal.js');

const dog = async (req,res) => {

  try{
    let createAnimal = req.body;

    let postanimal = await Animal.create(createAnimal);
    res.status(400).send({status: true, data:createAnimal});
  }
  catch(error) {
    res.status(500).send({ status: false, msg: error.message });
  }
}


   //if (Object.keys(getData).length == 0) return res.status(400).send({ status: false, msg: "Data is required to add a Author" });
  
const deleteDog = async (req,res) => {

  try{
    deleteAnimal = req.params.id;
    let deleteA = await Animal.findById({_id: deleteAnimal},{isDeleted:true});
    res.status(400).send({status: true, data:deleteA});
  }
  catch(error) {
    res.status(500).send({ status: false, msg: error.message });
  }
}


const getdog = async (req, res) => {

  try {
            
      let getdog = await student.find();

      res.status(201).send({ status: true, data: getdog});

    } catch(error) {
      res.status(500).send({ status: false, msg: err.meeesage });
    }
  }
  const updatedog = async (req, res) => {

    try {
      let id = req.params.Id;
      let body = req.body
      let upData = await Animal.findOneAndUpdate({_id: id},{$set: body, isDeleted: del},{new: true});

      console.log(dog);
      res.status(201).send({ status: true, data: updatedog});

    } catch(error) {
      res.status(500).send({ status: false, msg: err.meeesage });
    }
  }




  module.exports.updatedog = updatedog
module.exports.dog = dog;
module.exports.getdog = getdog;
module.exports.deleteDog = deleteDog;

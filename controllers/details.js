// const DetailModel = require('../models/detail.js'); //implemnet model

// module.exports = {
//     oneIndex,
// }

// // async function index(req, res){
// //     try{
// //         let details = await DetailModel.find({plantDetails: req.plant._id}).exec();
// //         res.status(200).json(details)
// //         console.log('ello')
// //     } catch(err){
// //         res.status(400).json(err);
// //     }
// // }

// async function oneIndex(req, res){
//     try{
//     let details = await PlantModel.findOne(req.params._id)
//     res.status(200).json(details)
//           console.log('ello')
//       } catch(err){
//           res.status(400).json(err);
//       }
//   }
const { where } = require("sequelize");
const entities = require("../models");

const Villager = entities.villager;


exports.addUser = async (req, res) => {
    try {
      const { name, contact, role, password} = req.body;
  
      const user = await Villager.create({
        name,
        contact,
        role,
        password
      });
  
      res.status(201).json({ user: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Interner server error" });
    }
  };

// get user
exports.getUserByContact = async (req, res) => {
    try {
      const { contact, password } = req.body;
      const existingUser = await Villager.findOne({where : {contact}});
  
      if (!existingUser) {
        return res.status(400).json({ error: "User with that number not found" });
      }

     if (existingUser.password != password) {
         return res.status(400).json({ error: "User with that number not found" });
     }
      res.status(200).json({ user: existingUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Interner server error" });
    }
  };




  

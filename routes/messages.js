//categories will be a protected/guard route

const router = require("express").Router();
const Message = require("../models/Message");

//adds a message to the message collection in ChatDB
router.post("/", async (req, res) => {
  const { content, username } = req.body;

  try {
    const newMessage = new Message({
      content,
      username,
    });

    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

//get all messages from message collection in ChatDB
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;

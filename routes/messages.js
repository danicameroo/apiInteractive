const Messages = require("../models/Messages");
const router = require("express").Router();


//CREATE

router.post("/" ,async (req,res)=>{
    const newMessages = new Messages(req.body)

    try{
        const savedMessages = await newMessages.save();
        res.status(200).json(savedMessages)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", async (req,res) =>{  
    try{
        const updatedMessages = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true});
        res.status(200).json(updatedMessages);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", async (req,res)=>{
    try{
        await Messages.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    }catch{
        res.status(500).json(err);
    }
});

//GET PRODUCT BY ID
router.get("/find/:id", async (req,res)=>{
    try{
        const messages = await Messages.findById(req.params.id);
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    try{
        let messages;
        if(qNew){
            messages = await Messages.find().sort({createdAt: -1}).limit(5)
        }else{
            messages = await Messages.find()
        }
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router

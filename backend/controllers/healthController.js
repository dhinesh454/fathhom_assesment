const ManageHealth = require('../models/managehealth');



/////string validation use this for post methods in controller
const isstringinvalid=(string)=>
    {
       if(string==undefined ||string.length===0) {
          return true;
       }
       else {
          return false;
       }
    
    }


const addUserHealth = async (req,res) => {
    const {mood,date,notes} = req.body;

    try {

        if(isstringinvalid(mood.trim())||isstringinvalid(date.trim())||isstringinvalid(notes.trim())){
           return res.status(400).json({message:'Something missing in the request !..try Again',success:false})
        }

        await ManageHealth.create({mood,entrydate:date,notes,userId:req.user._id});
        const health = await ManageHealth.find({userId:req.user._id})
        return res.status(201).json({message:'Added Successfully',health,success:true})



    } catch (error) {
        res.status(500).json({ error: 'Failed to register health',error:error.message })
    }
};



const getHealth = async (req,res) => {
    try {
        const health = await ManageHealth.find({userId:req.user._id});
        if(!health){
            return res.status(400).json({message:'No health found check again',success:false})
        }
        console.log(health)
        res.status(200).json({health,success:true})
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user',error:error.message })
    }
}


const deleteHealth = async(req,res) => {
    const {id} = req.params;

    
    try {
        // Check if ID is provided and valid
        if (!id) {
            return res.status(400).json({ message: 'Invalid ID provided', success: false });
        }
    
        const deletedUser = await ManageHealth.findByIdAndDelete({_id:id});
        res.status(202).json({message:'Successfully deleted',success:true}).end();
   
    } catch (error) {
        res.status(500).json({ error: 'Failed to Delete user..check again and Try',error:error.message })
    }
};

module.exports={addUserHealth,getHealth,deleteHealth}


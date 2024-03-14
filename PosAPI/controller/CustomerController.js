const Customer=require('../model/CustomerSchema');
/*
* POST->SAVE->BODY
* PUT->UPDATE->BODY
* GET->RETRIEVE->HEADERS
* DELETE->DELETE->HEADERS
* */

const saveCustomer= (req,resp)=>{

    const tempCustomer=new Customer({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        address:req.body.address

    });
    tempCustomer.save().then(result=>{
        resp.status(201).json({status: true, message: 'Save Successfully...'})
    }).catch(error => {
        resp.status(500).json(error);
    })
}



const updateCustomer= (req,resp)=>{
    Customer.updateOne(
        {id:req.body.id},{
            $set:{
                name: req.body.name,
                email: req.body.email,
                address:req.body.address
            }
        }
    ).then(result=>{
            if(result.nModified>0){
                resp.status(200).json({status: true, message: 'Update Successfully...'})
            }else {
                resp.status(200).json({status: false, message: 'Try Again...'})
            }
        }

    ).catch(error=>{
        resp.status(500).json(error);
    })
}




const deleteCustomer= (req,resp)=>{
    Customer.deleteOne({
        id:req.headers.id
    }).then(result=>{
            if(result.deletedCount>0){
                resp.status(200).json({status: true, message: 'Deleted..'})
            }else {
                resp.status(400).json({status: false, message: 'Try Again..'})
            }
        }

    ).catch(error=>{
        resp.status(500).json(error);
    })

}


const getCustomer= (req,resp)=>{
    Customer.findOne({
        id:req.headers.id
    }).then(result=>{
            if(result===null){
                resp.status(404).json({status: false, message: 'Empty Result..'})
            }else {
                resp.status(200).json({status: true, data: result})
            }
        }

    ).catch(error=>{
        resp.status(500).json(error);
    })

}


const getAllCustomer= (req,resp)=>{

    Customer.find().then(result=>{
        resp.status(200).json({status: true, data: result})}


    ).catch(error=>{
        resp.status(500).json(error);
    })


}


module.exports={
    saveCustomer,updateCustomer,deleteCustomer,getCustomer,getAllCustomer }
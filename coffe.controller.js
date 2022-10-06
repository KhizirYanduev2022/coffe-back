const Coffe = require('./coffe.models') 

module.exports.coffeController = {
getofdrinks: (req,res)=>{
    Coffe.create(req.body,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json('done')
        }
    })

},

findDrinks:(req,res)=>{
    Coffe.find({},'name, price',(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
},

findIdDrinks:(req,res)=>{
    Coffe.findById(req.params.id,(err,done)=>{
        if(err){
            res.json(err)
        }else{
            res.json(done)
        }
    })
},

deleteDrinks:(req,res)=>{
    Coffe.findByIdAndDelete(req.params.id,(err,done)=>{
        if(err){
            res.json(err)
        }else{
            res.json(done)
        }
    })
},

updateDrinks:(req,res)=>{
 Coffe.findOneAndUpdate(req.params.id,{name:req.body.name},(err,done)=>{
    if(err){
        res.json(err)
    }else{
        res.json(done)
    }
 })   
}


}




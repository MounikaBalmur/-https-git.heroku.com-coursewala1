var exp=require('express');
var app=exp();
var path=require('path');
var bodyParser=require('body-parser');
var mongoclient=require('mongodb').MongoClient;
var bcrypt=require('bcryptjs');
var mongoose=require('mongoose');
var pf;
var dbo;

var url="mongodb://mounika:coursewala1@ds261644.mlab.com:61644/coursewala";

//connecting with db
mongoclient.connect(url,(err,client)=>{
    if(err)
    {
        console.log('error in db connection');
    }
    else
    {
        //get object of db
        dbo=client.db('coursewala');
        console.log('connect with db');
    }
})

app.use(bodyParser.json());
//connecting with server
app.use(exp.static(path.join(__dirname,'dist/coursewala')));
//post req handler for register from
app.post('/homepage/register',(req,res,next)=>{
    console.log(req.body);
    dbo.collection('register').find({name:req.body.name}).toArray((err,data)=>{
        if(data.length===0)
        {
          bcrypt.hash(req.body.password,10,(err,hashcode)=>{
              if(err)
              {
                  console.log(err);
              }
              else
              {
                  dbo.collection('register').insertOne({
                      name:req.body.name,
                      mail:req.body.mail,
                      password:hashcode,
                      password1:hashcode,
                      contact:req.body.contact,
                      date:req.body.date,
                      gender:req.body.gender },()=>{

                        res.json('registered successfully');
                      })

                 
              }
          })
        }
        else
        {
            res.json('user existed choose another username');
        }
    })
})
//post for login
app.post('/homepage/login',(req,res,next)=>{
    console.log(req.body);
    pf=req.body.name;
    dbo.collection('register').find({name:req.body.name}).toArray((err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {   
            // checking user name
            if(data.length===0)
            {
                res.json("user not existed");
            }
            else
            {
                // checking password is matched or not
                bcrypt.compare(req.body.password,data[0].password,(err,success)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else if(success===true)
                    {
                        res.json("login successfully");
                    }
                    else
                    {
                        res.json("wrong password");
                    }
                })
            }
        }
    })
})

//get opration for profile
app.get('/userview/profile',(req,res,next)=>{
    dbo.collection('register').find({name:pf}).toArray((err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(data);
        }
    })
})

//post operation for course
app.post('/adminview/course',(req,res,next)=>{
    dbo.collection('course').insertOne(req.body),()=>{}
})

//get operation for customers in adminview
app.get('/adminview/customers',(req,res,next)=>{
    dbo.collection('register').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(data);
        }
    })
})

//put opration for profile updation
app.put('/userview/profile',(req,res)=>{
    //object recieved from client
    console.log(req.body);
    //convert stringid to objid
    var objectid=new mongoose.Types.ObjectId(req.body._id);
    console.log(objectid);
    //update document in db
    dbo.collection('register').update({_id:objectid},{$set:{name:req.body.name,
                                                            mail:req.body.mail,
                                                            contact:req.body.contact,
                                                            date:req.body.date,
                                                            gender:req.body.gender}},(err,success)=>{
                                                                if(err)
                                                                {
                                                                    console.log(err);
                                                                }
                                                                else
                                                                {
                                                                    dbo.collection('register').find({}).toArray((err,data)=>{
                                                                        if(err)
                                                                        {
                                                                            console.log(err);
                                                                        }
                                                                        else
                                                                        {
                                                                            res.json(data);
                                                                        }
                                                                    })
                                                                }
                                                            })

})

//get operation for course dropdown in homepage
app.get('/homepage',(req,res)=>{
    dbo.collection('course').find({}).toArray((err,data)=>{
        // console.log(data);
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(data);
            // console.log(data);
        }

    })
    
})
//get operation for course dropdown in userview
app.get('/userview',(req,res)=>{
    dbo.collection('course').find({}).toArray((err,data)=>{
        // console.log(data);
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(data);
            // console.log(data);
        }

    })
    
})

//delete operation for customers
app.delete('/adminview/customers',(req,res)=>{
//here the data is in req.body
//code for delete user document based on name
    dbo.collection('register').remove({name:req.body.name},(err,success)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            dbo.collection('register').find({}).toArray((err,data)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.json(data);
                }
            })
        }
    })
}

)



app.listen(process.env.PORT||8080,()=>{
    console.log('server started');
})
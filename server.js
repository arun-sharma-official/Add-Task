const express = require('express');
const connectdb = require('./config/db')
const course = require('./models/Course')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set('view engine','ejs');

connectdb();

app.get('/add', async function(req,res){
    res.render('index');
})



app.post('/add',async function(req,res){
   await  course.create({
        name:req.body.name,
        course:req.body.course
    });
    console.log("Created Succesfully");
    res.redirect('/')

})

app.get('/' ,async function(req,res){
    const courses = await course.find();
    res.render('list',{courses});
})



app.get('/edit/:id',async function(req,res){
   const temid = req.params.id 
   const updatedata = await course.findById(temid);
   res.render('edit',{updatedata})
});

app.post('/update/:id', async function(req,res){
    console.log(req.params.id)
   await  course.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    course:req.body.course
   });
   res.redirect('/')
})

app.post('/delete/:id', async function(req,res){
    await course.findByIdAndDelete(req.params.id);
    console.log("Deleted Sucessfully ");
    res.redirect('/');
})


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is Runing.....")
});
const express = require("express");
require("pug");
const app = express();


app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

let cars = [
    {id:"fy7", brand:"Tesla", model:"S"},
    {id:"fasdfy7", brand:"Saab", model:"9-4x"},
    {id:"fertwey7", brand:"Vovlo", model:"245"}
];


app.listen(3567, ()=>{
    console.log("lyssnar på port http://localhost:3567");
})



app.get("/",(req, res)=>{
    res.render("index");
});


// CRD-routes
app.get("/cars", (req, res)=>{
    res.render("cars",{cars});
});


app.post("/cars", (req, res)=>{

    const id = "id_"+Date.now();
    const {brand, model} = req.body;

    const car = {id, brand, model};

    cars = [car, ...cars];

    res.render("car",{car});
});


app.delete("/cars/:id", (req, res)=>{

    let id = req.params.id;

    cars =  cars.filter(car=>car.id!=id);

    res.status(200).end();

}); 

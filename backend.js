console.log("Arrancando server de nodejs");
var express=require("express");
var parcero=require("body-parser");
var web=express();
web.use(parcero.urlencoded());
var server;
//OPCIONAL #1
//server=web.listen(8080,mifuncion);
//function mifuncion () {
	// body...
//}
server=web.listen(8080,function(){
	console.log("Servidor arrancado");
});


//EJEMPLO BASE DE DATOS
var basededatos={
	usuario:"israel",
	clave:"platzi"
}


/*
//este es el home "/"
web.get("/",function (req,res) {
	res.send("Este es el home");
});
web.get("/about",function(req,res){
	res.send("<h1>Esto es una URL personalizada</h1>")
});
web.get("/parameter",function(req,res){
	res.send("<h1>Esto es una URL personalizada "+req.query.arg0+"</h1>")
});*/
web.get("/",function (req,res) {
	res.sendfile("formulario.html");
});
web.post("/entrar",function(req,res){
	if (req.body.usuario==basededatos.usuario && req.body.clave==basededatos.clave) 
		{	
			res.send("Entraste al servidor con post");
		}else{
			res.send("MALOS DATOS");
		}
});
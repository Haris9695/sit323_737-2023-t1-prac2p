

//simple requeste time logger 
app.use ((req, res, next)=>{

console.log("[Server Activity]" + Date(Date.now()));


/// this function tell that more processing is required for the current request 
/// and is in the next middleware function/router  handler .js


next();




});

app.listen(3000,() => console.log ('EXample app  listening on port 3000!'));
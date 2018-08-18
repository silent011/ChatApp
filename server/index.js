const PORT = 8000;

if(process.env != "production"){
    require('./dev-server')(PORT)
} else {
    require('./prod-server')(PORT)
}  

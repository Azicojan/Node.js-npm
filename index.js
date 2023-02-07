
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;



app.use(express.static('public'));

    

        app.get('/', function(req, res){

           
            console.log("File sent");
            fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
            
          });

            
        
        });
        

    

    
        app.get('/html',function(req, res){

            console.log("File sent");
            fs.readFile('html.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            return res.end();
             });

        });
        

    

    
        app.get('/css', function(req, res){
        console.log("File sent");
        fs.readFile('style.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/txt'});
        res.write(data);
        return res.end();

        });
        
    });
    
   
app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log('Server listening on PORT', PORT);
});
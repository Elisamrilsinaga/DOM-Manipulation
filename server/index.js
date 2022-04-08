 const http = require('http');
 const { PORT = 4000 } = process.env; // Ambil port dari environment variable
 
 const fs = require('fs');
 const path = require('path');
 const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
 
 // Request handler
 // Fungsi yang berjalan ketika ada request yang masuk.
 function getHTML(htmlFileName) {
   const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
   return fs.readFileSync(htmlFilePath, 'utf-8')
 }
 
 function onRequest(req, res) {
   switch(req.url) {
     case "/":
       res.writeHead(200)
       res.end(getHTML("index.html"))
       return;
     case "/cars":
       res.writeHead(200)
       res.end(getHTML("cars.html"))
       return;
     default:
       res.writeHead(404)
       res.end(getHTML("404.html"))
       return;
   }
 }
 
 const server = http.createServer(onRequest);
 
 // Jalankan server
 server.listen(PORT, () => {
   console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
 })
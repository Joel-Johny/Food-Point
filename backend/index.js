const express = require('express');
const app = express();
const cors=require("cors")
const bodyParser = require('body-parser');

const PORT = 1234; 
// app.use( 
//   cors({
//     origin:`*`
//   })
// )
// either this or make changes in vite config either can work
app.use(bodyParser.json());

//fetch menu items from the restaurant
app.post(`/api/menu`,async (req,res)=>{
  let {lat,long}=req.body[0]

  if(lat==null||long==null){
    lat=`1`
    long=`1`
  }
  const id=req.body[1]
  const swiggyRestMenu=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${id}`
  const headers = new Headers({
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  });
  fetch(swiggyRestMenu, { headers })
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.error(error));

})

//fetch list of all reastaurants in current location and send back response
app.post(`/api/rlist1`,async (req,res)=>{
    
  const {latitude,longitude}=req.body
  
  const url = `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`;
  const headers = new Headers({
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  });
  fetch(url, { headers })
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.error(error));
  
})

//fetch list of all reastaurants in Nagwara (default) location and send back response

app.get(`/api/rlist2`,async (req,res)=>{
    
  
  const url = 'https://www.swiggy.com/mapi/homepage/getCards?lat=13.0350041&lng=77.62354130000001';
  const headers = new Headers({
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  });
  
  fetch(url, { headers })
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.error(error));
  
})






app.get('/api', (req, res) => {
    res.send('Hello World!');
  });

  
app.listen(PORT, () => {
  console.log(`server running in port`,PORT);
});

  // app.listen(`1234`,()=>{
  //   console.log("Server running at port 1234")
  // })






// var host = process.env.HOST || '0.0.0.0';
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 8080;

// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// })




// const express = require('express');
// const axios = require('axios');
// const corsAnywhere = require('cors-anywhere');
// const  swiggyUrl  = "https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204&lng=73.8567"
// const  test  ="https://jsonplaceholder.typicode.com/posts"

// const app = express();

// // Add middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Set up a proxy server with cors-anywhere
// const proxy = corsAnywhere.createServer({
//   originWhitelist: [], // Allow all origins
// });
// proxy.listen(8081, () => {
//   console.log(`CORS Anywhere proxy server running on port 8081`);
// });

// // Add route
// app.get('/', async (req, res) => {
//   try {
//     const url = `http://localhost:8081/`+test;
//     const response = await axios.get(url);
//     res.send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Start the server
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Express server running on port ${PORT}`);
// });





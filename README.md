# Project composition, Development Kit
* Javascript, HTML, CSS
* React Native, Expo
* ngrok
* VScode

# How to run 如何使用
* Download project
```
git clone https://github.com/hunting945/rn-blog-app.git
```

* Install packages
```
npm install
```

* Run ngrok and update api/jsonServer.js baseURL from forwarding address
```
cd jsonserver/
./ngrok authtoken YOUR_AUTHTOKEN
./ngrok http PORT_NUMBER
``` 
*YOUR_AUTHTOKEN: get from ngrok website gave authtoken*

*PORT_NUMBER: use port 8000 the same as setting in package.json*

* Install packages and run webserver
```
cd jsonserver/
npm install
npm run db
```

* Install packages and run app
```
npm install
npm start
```
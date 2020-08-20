# NLP_website
 App that lets user run natural language processing on articles


##How to set up


###api key
Note API_KEY is hidden in .env 
- get your own at https://www.meaningcloud.com/ 
- change **server/index.js:line 35**
```js
// server/index.js : line 35
apikey = INSERT_YOUR_API_KEY_HERE
```
###first start
- Open terminal in NLP_website folder
- run following command: 
    - ```bash
       npm run firststart
      ```
- Done! (Production sever up and running on on http://localhost:5000)

###development mode

if you want to restart :

- for production (runs on http://localhost:5000) :
    -  ```bash 
        npm run start
       ```       

- for development (runs on http://localhost:8080) :
    -  ```bash 
        npm run dev
       ```       
    

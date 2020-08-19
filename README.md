# NLP_website
 App that lets user run natural language processing on articles


How to start:

    Open terminal in NLP_website folder, 
    run following command: -> npm run firststart

Once fiststart has been run sever runs on http://localhost:5000, if you want to restart :

    for production (runs on http://localhost:5000) : -> npm run start       

    for development (runs on http://localhost:8080): -> npm run dev   
    
Note API_KEY is hidden in .env so you would have to get your own at https://www.meaningcloud.com/ and change :

    # server/index.js : line 35
    apikey = INSERT_YOUR_API_KEY_HERE

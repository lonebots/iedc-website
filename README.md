<!-- @format -->

# IEDC GECT Main website (MERN STACK)


### UI design:

The main user interface is designed AdobeXD.
[**Reference UI design**](https://xd.adobe.com/view/c0b52cca-a0eb-4712-8d35-5a2de99b2fd9-95e6/)


### Contents to be added

1. main page
2. app model(single page interacticve)
3. fully funtional
4. main events
5. upcoming events
6. informations about the team
7. web team
8. achievements
9. projects section
10. Fab lab section _facilities in short_
11. Carousel - _sliding in picture and main events in past_

### Componets updated list 
1. Main nav bar
2. Home 
3. About 
4. Event( If possible splitting )
5. Achievements
6. slider
7. Contact us(footer)
7. user page (not visible from main page)           
   
### Technologies used       
1. Frontend - ejs, css, js      
2. Backend  - node, express, mongoDB       

### Guidelines     
- #### Setup
  - have node and npm pre installed
  - clone the repo
  - cd iedc-website
  - npm i (use this only for the first time, and whenever new dependancies are added)
  - npm run dev (alternative - nodemon app.js)
  - open http://localhost:5000/about
  
- #### Tips
  - Follow the file structure given below.
  - Use meaningful variable names if any.
  - Try to maintain proper indentation. 
  - ejs files are very similar to html, for now just change the extension from html to ejs
  - ejs files inside views folder, css and js  files inside public folder  
  - open to suggestions

### Folder Structure
```
example     
├── app.js
├── package.json
├── routes (all backend routes)    
|   ├── route1.js     
|   └── route2.js       
├── models (if mongoose is used)        
|   ├── model1.js       
|   └── model2.js       
├── public (folder to keep stylesheets and js files)             
|   ├── css         
|   |   └── (if possible try to maintain the same file structure inside views)        
|   └── js          
|       └── (if possible try to maintain the same file structure inside views)      
└── views  
    ├── pages
    |   ├── home.ejs
    |   ├── about.ejs
    |   ├── events.ejs
    |   ├── teams.ejs
    |   └── achievements.ejs
    └── partials
        ├── navbar
        |   ├── navbar.ejs
        |   ├── navbarHeading
        |   └── navbarLink
        ├── homeHeader
        |   ├── homeHeader.ejs
        |   ├── logo.ejs
        |   └── heading.ejs
        ├── homeSlider
        |   ├── homeSlider.ejs
        |   ├── sliderText.ejs
        |   ├── sliderButton.ejs
        |   └── sliderImage.ejs
        ├── homeCard
        |   ├── homeCard.ejs
        |   ├── cardHeading.ejs
        |   ├── cardText.ejs
        |   └── cardButton.ejs
        ├── aboutText
        |   └── aboutText.ejs
        ├── eventsCard
        |   ├── eventsCard.ejs
        |   ├── cardHeading.ejs
        |   └── cardText.ejs
        ├── header (text + back button)
        |   └── header.ejs    
        └── footer (text + to top arrow) 
            └── footer.ejs
```

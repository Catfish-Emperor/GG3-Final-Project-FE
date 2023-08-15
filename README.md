# Final Project of Generasi GIGIH 3.0

A simple web project for completition requirement of Generasi GIGIH 3.0 Program by GoTo Impact Foundation, full-stack development track. This project is made using Mongodb, Express.js, React.js and Node.js (MERN) stack. This project is based to clone [Tokopedia Play](https://www.tokopedia.com/play/channels) which will show video list with thumbnail from youtube to users and the users can click the thumbnail to go to Video Detail page.

all of video and product data are just for the sake of showcasing in a learning project and not real products.
deployed app link: [https://muh-gg3-final.vercel.app/](https://muh-gg3-final.vercel.app/)

## Features:
* Home page with list of videos and their thumbnails from [Youtube](https://www.youtube.com), user can click the thumbnail to go to detail video page.
* Detail Video page where user can see youtube embed video, product list, and comment section
* link to shop for each product list (in this project, I use [example.com](example.com) as placeholder)
* User can submit their own comment by input their username and comment and see their submitted comment
* Navbar that contain link back to home page, user profile picture on top right, the user is set as "guest" as this project don't provide signup & sign in, and toggle light/dark mode beside the user avatar
* Randomized user avatar for commenting from [RoboHash](https://robohash.org/)
* Loading indicator using spinner and skeleton from chakraUI

## How to run in Local:
1. git clone https://github.com/Catfish-Emperor/GG3-Final-Project-FE.git
2. open it in your editor
3. go to config.js and adjust the backend server url
4. npm install
5. npm start

## Database Model
There are three database models:
* Videos
* Products
* Comments

### Videos
* video object
```
{
  "_id": {"$oid": "xxxxxx"},
  "videoId": "01",
  "videoUrl": "https://www.youtube.com/embed/xxxxxx",
  "videoTitle": "xxxx",
  "imageThumbnailUrl": "https://youtube.com/thumbnail-Img-1.jpg"
}
```
**GET /**
Returns all videos in the database.
* **URL Params**  
  None
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```
**GET /video/:id**
Returns selected video by videoId in the database.
* **URL Params**  
*Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  video: [
           {<video_object>}
         ]
}
```

### Products
* product object
```
{
  "_id": {"$oid": "xxxxx"},
  "productLink": "https://example.com/",
  "productImg": "https://images.unsplash.com/xxxxx",
  "title": "xxxxx",
  "price": "Rp. 10.000",
  "videoId": "01"
}
```

**GET /product/:id**

Returns all products in the database that associated to the videoId, got the input from :id param.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

### Comments
* comment object
```
{
  "_id": {"$oid": "xxxxxxx"},
  "userName": "User 1",
  "comment": "Comment from User 1 about video 01",
  "timeStamp": {"$date": "xxxxxx"},
  "videoId": "01"
}
```
**GET /comment/:id**

Returns all comments in the database that are related to the videoId
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  comments: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```
**POST /comment/:id**

Post a comment to the database associated to the videoId
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 201  
  **example post req body type raw json:**  
```
{
    "userName": "Hadi",
    "comment": "This product is good",
    "videoId": "01"
}
```







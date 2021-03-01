# Javascript SDK

## Installation

### Option 1: CDN

To add the Javascript SDK you can use the cdn from the nice people of jsdelivr.
```html
<script src="https://cdn.jsdelivr.net/npm/@cloudonaut/javascriptsdk@1.1.2/dist/cloudonaut.min.js"></script>
```
On the time we where writing this document the version is 1.1.2 make shure to change it to the latest one.

### Option 2: Download from GitHub

Download the latest version from [GitHub](https://github.com/Cloudonaut-com/JavaScriptSDK). The builded and minified version cloudonaut.min.js can be found in the dist folder.

### Option 3: npm

[TODO]
We need to test this :(

## The basics

The SDK is basicly a class that can be instantiated.
```js
var api = new cloudonaut.API(<app ID>, <Optional: app secret>);
```
As mentioned before we suggest to fill in app ID only and do not pass the app secret. Whitelist your URL or use a router back-end script.

The variable api now holds the entire ecosystem of cloudonaut and is connected with your app ID.

The api object has a few properties.  
**api.appID** is the app ID you provided.  
**api.appSecret** should be blank or contains the value you provided.  
**api.url** contains the api entry point url. You can change this to the URL of your router script. All calls made by this sdk will use this url to post data to.  
**api.player** is an object containing the logged in player. This object should be empty as long as you do not log in. Once a player is logged in this object will be used in calls made by this sdk that needs player info.  
**api.character** will contain a selected player character. After you log in with a player you can select one of his characters. This characters will be used to calls made by this api that needs character info.

To use the power of Cloudonaut, the api holds lots of services.  
Auth() for authentication.  
Friend() for managing friends.  
Leaderboard() for the leaderboard and scoring service
and many more. We will go through all services in this document.

To use a service you can instantiate one using the api.
This example will create an authentication service.
```js
var auth = api.Auth();
```

Services have methods that call the Cloudonaut backend. All these methods return a promise. So you can use them with then() and catch().
In this example we login with an anonymous user.
```js
var auth = api.Auth();
auth.Anonymous(<device ID, GUID, Custom unique ID>).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
```

You can skip the creation of an instance and just call a specific method of the service.  
In this example we use a Cloudonaut helper function from our CF() service to generate a GUID.
```js
api.CF().GetGUID().then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});
```

[Go on and explore our services!](https://www.cloudonaut.com/docs/?tool=javascript)
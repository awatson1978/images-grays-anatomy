**images-grays-anatomy** is a Meteorite package to add image assets from Grays Anatomy to your application.

## WARNING:  THIS PACKAGE IS 11MB LARGE!

------------------------
### Installation

First, install the accounts-famous-dead-people package from the command line, like so:

  ````
mrt add images-grays-anatomy
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

  ````js
{
  "meteor": {
  "branch": "master"
},
  "packages": {
  "images-grays-anatomy": {
    "git": "https://github.com/awatson1978/images-grays-anatomy.git"
  }
}
}

````

### Create Your Model
Make sure you have defined a Images collection in your model.js (or elsewhere).

````js
Images  = new Meteor.Collection("images");

Images.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
````


### Add the Server-Side Publication
````js
// the basic publication pattern
Meteor.publish('images', function () {
    return Images.find();
});

// the advanced publication pattern
Meteor.publish('images', function (image_metadata_to_search_for ) {
    return Posts.find({fileName: image_metadata_to_search_for});
});

````

### Add the Client-Side Subscription
````js
// the basic subscription pattern
Meteor.subscribe('images');

// the advanced subscription pattern
Meteor.autorun(function(){
    Meteor.subscribe('posts', Session.get('image_metadata_to_search_for'));
});
````


------------------------
### License

Code is MIT License. Use as you wish, including for commercial purposes.
  Images should all be in the public domain.

------------------------
### Support
Found this package to be useful?  Consider tipping the package maintainer for their time!

  [![Support via Gittip](https://raw.github.com/gittip/www.gittip.com/master/www/assets/gittip.png)](https://www.gittip.com/awatson1978/)


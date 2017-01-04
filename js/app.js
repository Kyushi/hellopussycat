var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.nicknames = ko.observableArray(data.nicknames);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imageAttribution = ko.observable(data.imageAttribution);

  this.levelNo = ko.computed(function(){
    return Math.floor(this.clickCount()/10)
  }, this);

  this.levels = ko.observableArray([
    "Runt",
    "Kitten",
    "Cat-Teen",
    "Cat on the prowl",
    "Big Kitty",
    "Cat Royalty"
  ]);

  this.level  = ko.computed(function(){
    return this.levelNo() >= 5? this.levels()[5] : this.levels()[this.levelNo()];
  }, this);
}

initialCats = [
  {
    clickCount: 0,
    name: "Kitty",
    nicknames: ["Sweetie", "Kitty", "Bay-B", "Furball", "Scratchie"],
    imgSrc: "img/22252709_010df3379e_z.jpg",
    imageAttribution: "photourl"
  },
  {
    clickCount: 0,
    name: "Gingy",
    nicknames: ["Barbarossa", "Red Baron"],
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    imageAttribution: "photourl"
  },
  {
    clickCount: 0,
    name: "Boss",
    nicknames: ["Yakuza", "Al Capone", "Clarence"],
    imgSrc: "img/1413379559_412a540d29_z.jpg",
    imageAttribution: "photourl"
  },
  {
    clickCount: 0,
    name: "Simba",
    nicknames: ["King", "Puma"],
    imgSrc: "img/4154543904_6e2428c421_z.jpg",
    imageAttribution: "photourl"
  },
  {
    clickCount: 0,
    name: "Sleepy",
    nicknames: ["Yawnz"],
    imgSrc: "img/9648464288_2516b35537_z.jpg",
    imageAttribution: "photourl"
  }
]

var ViewModel = function() {
  var self = this;

  this.CatList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.CatList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(self.CatList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }

  this.setCurrentCat = function(cat) {
    self.currentCat(cat);
  }
}

ko.applyBindings(new ViewModel());

var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Kitty");
  this.nicknames = ko.observableArray(["Sweetie", "Kitty", "Bay-B", "Furball", "Scratchie"]);
  this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
  this.imageAttribution = ko.observable("photourl");

  this.levelNo = ko.computed(function(){
    return Math.floor(this.clickCount()/10)
  }, this);

  this.levels = ko.observableArray([
    "Runt",
    "Kitten",
    "Cat-Teen",
    "Cat on the prowl",
    "Big Kitty"
  ]);

  this.level  = ko.computed(function(){
    return this.levelNo() >= 5? "Cat Royalty": this.levels()[this.levelNo()];
  }, this);
}

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  }
}

ko.applyBindings(new ViewModel());

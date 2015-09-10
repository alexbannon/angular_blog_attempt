var app = angular.module("grumblr");

app.controller("grumblesController", function(){
  this.grumbles = [
    {
      title: "Angular",
      content: "Angular is tough, but not as tough as Backbone!"
    },
    {
      title: "Stress",
      content: "I'm stressed out!"
    },
    {
      title: "Job",
      content: "Get me a job already!"
    }
  ];

  this.formIsVisible = false;

  this.toggleForm = function(){
    if(this.formIsVisible == false){
      this.formIsVisible = true;
    }
    else{
      this.formIsVisible = false;
    }
  };

  this.createGrumble = function(){
    console.log(this.newData)
    this.grumbles.unshift(this.newData)
    this.newData = ""
    console.log("I have been submitted")
  };

  this.updateGrumble = function( index ){
    console.log(this.grumbles[index])
    console.log(this.storeGrumble)
    this.grumbles[ index ] = this.storeGrumble
  };

  this.currentGrumble = function( index ){
    this.storeGrumble = this.grumbles[ index ]
  };
})

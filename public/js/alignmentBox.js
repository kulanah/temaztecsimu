class AlignmentBox{
  constructor(extJson, ulClass, drawLocation){
    this.currentStep = 0;
    this.currentLesson = 0;
    this.currentTopic = 0;
    this.jsonObj = extJson;
    this.ul = $(ulClass);
    this.drawLocation = $(drawLocation);
    this.done = false;

    this.doneWithStep = false;
    this.doneWithTopic = false;
    this.doneWithLesson = false;

  }

  drawInital(){
    for (let i = 0; i < this.jsonObj.length; ++i){
      let lessonNum = i + 1;
      this.ul.append('<li>' + this.jsonObj[i].name + '</li>');
      if (this.jsonObj[i].topics){
        this.ul.append('<ul class=\'lesson' + lessonNum + '\'>');
        for (let j = 0; j < this.jsonObj[i].topics.length; ++j){
          let stepNum = j + 1;
          let liData = '<li class=\'l' + lessonNum + 'p' + stepNum + '\'>'
          $('.lesson' + lessonNum).append(liData + this.jsonObj[i].topics[j].name + '</li>');
          $('.l' + lessonNum + 'p' + stepNum).on('click', function(context){
            this.setOnClick(i, j);
          }.bind(this));
        }
        $('.data').append('</ul>');
      }
    }
  };

  setOnClick(lesson, topic){
    this.currentLesson = lesson;
    this.currentTopic = topic;
    this.currentStep = 0;
    this.fillCurrent();
  };

  nextStep(){
    if (this.drawLocation.text() == ""){
    } else if (!this.done){
      if (this.currentStep == this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length - 1){
        if (this.currentTopic == this.jsonObj[this.currentLesson].topics.length - 1){
          if (this.currentLesson == this.jsonObj.length - 1){
            this.done = true;
            this.drawLocation.text('you\'re done!');
          } else {
            ++this.currentLesson;
            this.currentStep = 0;
            this.currentTopic = 0;
          }
        } else {
          this.currentTopic++;
        }
        this.currentStep = 0;
      } else {
        this.currentStep++;
      }
    }
    this.fillCurrent();
  }

  prevStep(){
    if(this.drawLocation.text() == ""){
    } else if (!this.done){
      if(this.currentStep == 0){
        if(this.currentTopic == 0){
          if(this.currentLesson == 0){
            //do nothing because we're at the start
          } else {
            --this.currentLesson;
            this.currentTopic = this.jsonObj[this.currentLesson].topics.length - 1;
            this.currentStep = this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length - 1;
          }
        } else {
          --this.currentTopic;
          this.currentStep = this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length - 1;

        }
      } else {
        --this.currentStep;
      }
    }
    this.fillCurrent();

  }

  addPrevButton(selector){
    selector.on('click', function(){
      this.prevStep();
    }.bind(this));
  }

  addNextButton(selector){
    selector.on('click', function(){
      this.nextStep();
    }.bind(this));
  }

  fillCurrent(){
    if (!this.done){
      this.drawLocation.text(this.jsonObj[this.currentLesson].topics[this.currentTopic].steps[this.currentStep].text);
    }
  }

}
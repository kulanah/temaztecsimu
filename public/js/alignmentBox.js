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
    let str = "";
    for (let i = 0; i < this.jsonObj.length; ++i){
      let lessonNum = i + 1;
      //this.ul.append('<li>' + this.jsonObj[i].name + '</li>');
      str = str + '<details><summary>' + this.jsonObj[i].name + '</summary>';
      //console.log(str);
      if (this.jsonObj[i].topics){
        //this.ul.append('<ul class=\'lesson' + lessonNum + '\'>');
        str = str + '<ul class=\'lesson' + lessonNum + '\'>'
        for (let j = 0; j < this.jsonObj[i].topics.length; ++j){
          let stepNum = j + 1;
          let liData = '<li class=\'l' + lessonNum + 'p' + stepNum + '\'>'
          /*$('.lesson' + lessonNum).append(liData + this.jsonObj[i].topics[j].name + '</li>');
          $('.l' + lessonNum + 'p' + stepNum).on('click', function(context){
            this.setOnClick(i, j);
          }.bind(this));*/
          str = str + liData + this.jsonObj[i].topics[j].name + '</li>';
        }
        //$('.data').append('</ul>');
        str = str + '</ul>'
      }
      str = str + '</details>'
    }
    this.ul.append(str);
    for (let i = 0; i < this.jsonObj.length; ++i){
      let lessonNum = i + 1;
      for (let j = 0; j < this.jsonObj[i].topics.length; ++j){
        let stepNum = j + 1;        
        $('.l' + lessonNum + 'p' + stepNum).on('click', function(context){
          for (let i = 0; i < this.jsonObj.length; ++i){
            let lessonNum = i + 1;
            for (let j = 0; j < this.jsonObj[i].topics.length; ++j){
              let stepNum = j + 1; 
              $('.l' + lessonNum + 'p' + stepNum).css({
                'background': '#FFF',
                'color': 'black'
              });
            }
          }
          $('.l' + lessonNum + 'p' + stepNum).css({
            'background': '#0A246A',
            'color': 'white'
          });
          console.log(lessonNum, stepNum);
          console.log("fired")
          this.setOnClick(i, j);
        }.bind(this));
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
    $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
      'background': '#FFF',
      'color': 'black'
    });
    if (this.drawLocation.text() == ""){
    } else if (!this.done){
      if (this.currentStep == this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length - 1){
        if (this.currentTopic == this.jsonObj[this.currentLesson].topics.length - 1){
          if (this.currentLesson == this.jsonObj.length - 1){
            this.done = true;
            this.drawLocation.text('You\'re done!');
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
    if (!this.done){
      $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
        'background': '#0A246A',
        'color': 'white'
      });
    }
    this.fillCurrent();
  }

  prevStep(){
    $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
      'background': '#FFF',
      'color': 'black'
    });
    if(this.drawLocation.text() == ""){
    } else if (this.done){
      this.done = false;
    } else if(this.currentStep == 0){
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
    $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
      'background': '#0A246A',
      'color': 'white'
    });
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
      $('#tunealignmentstepvalue').html(this.currentStep + 1 + ' of ' + this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length);
    } else {
      $('#tunealignmentstepvalue').html('');
    }
    this.activateButtons(this.jsonObj[this.currentLesson].topics[this.currentTopic].steps[this.currentStep].flags);
  }

  activateButtons(flags){
    console.log(flags);


    let buttonArray = [];
    let reqSelector = $('.required');
    let flagSelector = $('.' + flags);

    $(reqSelector).each(function(index, element){
      buttonArray.push(element);
    });
    $(flagSelector).each(function(index, element){
      buttonArray.push(element);
    });
    console.log(buttonArray);
    //$('area').not(buttonArray).prop('onclick', null).off('click');
    /* 
      WHERE TO STORE??? 
      run all onclick setters
      create array for areas 
      pushapply required stuff onto it       
      pushapply flag stuff onto it 
      select all areas not in that array and turn off their onclicks

    */
    // $('img').mapster({
    //   mapKey: 'step-flag',
    //   isSelectable: false
    // }).mapster('set', true, flags).mapster('unbind', true);
  }
}
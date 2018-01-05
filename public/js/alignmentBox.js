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
      str = str + '<details id=\'l' + lessonNum + '\'><summary>' + this.jsonObj[i].name + '</summary>';
      if (this.jsonObj[i].topics){
        str = str + '<ul class=\'lesson' + lessonNum + '\'>'
        for (let j = 0; j < this.jsonObj[i].topics.length; ++j){
          let stepNum = j + 1;
          let liData = '<li class=\'l' + lessonNum + 'p' + stepNum + ' tunealignmenttopic\'>'
          str = str + liData + this.jsonObj[i].topics[j].name + '</li>';
        }
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
          $('.tunealignmenttopic').css({
            'background': '#FFF',
            'color': 'black'
          });
          $('.l' + lessonNum + 'p' + stepNum).css({
            'background': '#0A246A',
            'color': 'white'
          });
          this.setOnClick(i, j);
        }.bind(this));
      }
    }
  };

  setOnClick(lesson, topic){
    this.done = false;
    this.currentLesson = lesson;
    this.currentTopic = topic;
    this.currentStep = 0;
    activeAlignment = 0;
    this.fillCurrent();
    this.activateTuneAlignment()
  };

  activateTuneAlignment(){
    deactivateDA();
    stigmatorActive = false;
    setupbox.tuneAlignmentStep = 1;
    // Show help window for the current topic
    $('#tunehelppopup').show();
    switch(this.currentLesson){
      case 0:
        switch(this.currentTopic){
          case 0:
            if($('#tunehelpcontent').attr('src')!='./public/html/e05a0075.htm'){
              $('#tunehelpcontent').attr('src', './public/html/e05a0075.htm');
            }
            $('#magnificationvalue').text('LM 200 x');
            alignmentMode = 'Screen Intensity';
            break;
          case 1:
            if($('#tunehelpcontent').attr('src')!='./public/html/e05a0089.htm'){
              $('#tunehelpcontent').attr('src', './public/html/e05a0089.htm');
            }
            $('#magnificationvalue').text('LM 200 x');
            switch(this.currentStep){
              case 0:
                activateBeamShift();
                break;
              case 1:
                activatePivotPointX();
                break;
              case 2:
                activatePivotPointY();
                break;
              default:
                availableAlignments = ['Screen Intensity', 'Gun Tilt'];
                setActiveAlignment();
                break;
            }
            //alignmentMode = 'Piv pt gun tilt'
            break;
          case 2:
            if($('#tunehelpcontent').attr('src')!='./public/html/e05a0093.htm'){
              $('#tunehelpcontent').attr('src', './public/html/e05a0093.htm');
            }
            $('#magnificationvalue').text('LM 1850 x');
            switch(this.currentStep){
              case 0:
                updateBeamSlider(6);
                availableAlignments = ['Beam Shift', 'Condensor Stig'];
                setActiveAlignment();
                break;
              case 1:
                updateBeamSlider(2);
                availableAlignments = ['Gun Shift', 'Condensor Stig', 'Gun Tilt'];
                setActiveAlignment();
                break;
              default:
                activateGunShift();
                break;
            }
            break;
          case 3:
            if($('#tunehelpcontent').attr('src')!='./public/html/e05a009d.htm'){
              $('#tunehelpcontent').attr('src', './public/html/e05a009d.htm');
            }
            $('#magnificationvalue').text('LM 17000 x');
            activateGunShift();
            switch(this.currentStep){
              case 0:
                updateBeamSlider(5);
                break;
              case 1:
                updateBeamSlider(10);
                break;
              case 2:
                updateBeamSlider(11);
                break;
            }
            break;
        }
        break;
      default:
        $('#tunehelppopup').hide();
        setupbox.tuneAlignmentStep = 0;
        break;
    }
    drawInfoPanelValues();
    setupbox.drawCanvas();
  }

  nextStep(){
    $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
      'background': '#FFF',
      'color': 'black'
    });
    if (this.drawLocation.text() == ""){
    } else if (!this.done){
      if (this.currentStep == this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length - 1){
        if (this.currentTopic == this.jsonObj[this.currentLesson].topics.length - 1){
          this.done = true;
          this.drawLocation.text('You have completed the ' + this.jsonObj[this.currentLesson].name + ' alignments.');
        } else {
          this.currentTopic++;
          this.currentStep = 0;
          activeAlignment = 0;
          if(this.currentLesson == 0 && this.currentTopic == 1){
            // Skip gun tilt pivot point when clicking next step
            this.currentTopic++;
          }
        }
      } else {
        this.currentStep++;
      }
    }
    if (!this.done){
      $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
        'background': '#0A246A',
        'color': 'white'
      });
      document.getElementById('l' + (this.currentLesson + 1)).open = true;
    }
    this.fillCurrent();
    this.activateTuneAlignment();
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
          //do nothing because we're at the start
      } else {
        --this.currentTopic;
        this.currentStep = this.jsonObj[this.currentLesson].topics[this.currentTopic].steps.length - 1;
        activeAlignment = 0;
      }
    } else {
      --this.currentStep;
    }
    $('.l' + (this.currentLesson + 1) + 'p' + (this.currentTopic + 1)).css({
      'background': '#0A246A',
      'color': 'white'
    });
    document.getElementById('l' + (this.currentLesson + 1)).open = true;    
    this.fillCurrent();
    this.activateTuneAlignment();
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
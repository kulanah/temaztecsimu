class AlignmentBox{
  constructor(extJson, ulClass, drawLocation){
    this.currentStep = 0;
    this.currentLesson = 0;
    this.jsonObj = extJson;
    this.ul = $(ulClass);
    this.drawLocation = $(drawLocation);
    this.context = this;
  }

  drawInital(){
    for (let i = 0; i < this.jsonObj.length; ++i){
      let lessonNum = i + 1;
      this.ul.append('<li>' + this.jsonObj[i].name + '</li>');
      if (this.jsonObj[i].lessons){
        this.ul.append('<ul class=\'lesson' + lessonNum + '\'>');
        for (let j = 0; j < this.jsonObj[i].lessons.length; ++j){
          let stepNum = j + 1;
          let liData = '<li class=\'l' + lessonNum + 'p' + stepNum + '\'>'
          $('.lesson' + lessonNum).append(liData + this.jsonObj[i].lessons[j].name + '</li>');
          $('.l' + lessonNum + 'p' + stepNum).on('click', function(context){
            this.setOnClick(i, j);
          }.bind(this));
        }
        $('.data').append('</ul>');
      }
    }
  };

  setOnClick(lesson, part){
    this.drawLocation.text(this.jsonObj[lesson].lessons[part].steps[this.currentStep].text);
  };
}
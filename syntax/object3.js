var q = {
    v1:'v1',
    v2:'v2',
    f1:function (){
      // this 키워드로 함수가 속해있는 객체의 데이터를 참조
      console.log(this.v1);
    },
    f2:function(){
      console.log(this.v2);
    }
  }
   
q.f1();
q.f2();
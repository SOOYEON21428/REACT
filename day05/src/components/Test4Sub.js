import React from 'react';

const getColor = (color) => {
   console.timeLog('getColor')

   switch(color){
       case 'hotpink':
           return '진분홍'
       case 'magenta':
           return '보라'
       case 'skyblue':
           return '하늘'
       case 'red':
           return '빨강'    
   }
}

const getFood = (food) => { // 함수 선언 수정
   console.log('getFood')

   switch(food){ 
       case '케밥':
           return '고기'
       case '마제소바':
           return '밀가루'
       case '라면':
           return '밀가루'
       case '타코':
           return '멕시코'
   
   }
}

const Test4Sub = ({color, food}) => {
    //해결방법
    //useMemo를 사용하면
    //color를 바꾸면 getColor 로그만 찍히고, food를 바꾸면 getFood 로그만 찍히도록 한다
   const colorInfo = useMemo(() => {
    return getColor(color)
   },[color]) // 변수 이름 수정
   const foodInfo = getFood(() => {
    return getFood(food)
   },[food])
   return (
       <div>
            <h3>선택한 색 : {color}</h3> 
            <h4>당신은 {foodInfo}을 좋아하는 군요</h4> // 출력 문구 수정
       </div>
   );
};

export default Test4Sub;

import React, { useRef, useState } from 'react';//가운데 리엑트에서 제공하는 훅훅

const ExpertFood = () => {
  //useState는 초기값인 foods값에 set붙인 변수값에 넣은 값을 보냄, usestate(값 유형)을 담음
  const [foods, setFoods] = useState([])
  const [checked, setChecked] = useState([])
  //연동을위한 값
  // ref={(el) => { inputRef.current[0] = el}} 참조하기 위한 주소값
  const inputRef = useRef([])

  //푸드스에 존재하는 빈 배열에 콘캣을 해서 새로운 배열을 만들어 넣음
  //연동된 인풋의.커런트[0번째 방].값 을 꺼내서 왼쪽 값에 넣음
  const onClickAddFood = () => {
    setFoods(
      foods.concat({
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value
      })
    )
    setChecked(checked.concat(false))
  }
  
  const onChangeCheckbox = (i) => {
    checked.splice(i, 1, !checked[i])
    setChecked(checked.concat())
  }
  
  const onClickRemoveFood = () => {
    setFoods(foods.filter((food, i) => !checked[i]))
    setChecked(new Array(foods.length - 1).fill(false)) 
  }
  console.log("foods", foods)
  console.log("checked", checked)


  const foodList = foods.map(({kor, eng}, i) => {
    return (
      <li key={i}>
        <input type="checkbox"
          checked={checked[i]} 
          onChange={() => { onChangeCheckbox(i) }}
        />
        {`${kor} (${eng})`}
      </li>
    )
  })

  return (
    <div>
      <input type="text" placeholder='한국 음식 이름' ref={(el) => { inputRef.current[0] = el}}/>
      <input type="text" placeholder='영어 음식 이름' ref={(el) => { inputRef.current[1] = el}}/>
      <button onClick={onClickAddFood}>추가</button>
      <button onClick={onClickRemoveFood}>삭제</button>
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>
  );
};

export default ExpertFood;
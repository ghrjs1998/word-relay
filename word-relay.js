const number = Number(prompt('몇 명이 참가하나요?'));
// prompt 함수에서 취소를 눌렀다면 값이 null값이 될것이고 그 값이 Number함수에 들어가면 NaN이 됨
// NaN은 if문에 들어가면 항상 false로 취급되므로 number가 null이면 if문 내부는 실행되지 않음

if(number){
    // document.queryselector('button') button과 일치하는 문서 내 첫번째 element를 반환, 일치하는 요소가 없으면 null값 반환
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    // 제시어
    let word;
    // 새로 입력한 단어
    let newWord;
    
    const onClickButton = () =>{
        // 제시어가 비어있는가?
        if(newWord.length === 3 && (!word || word[word.length-1] === newWord[0])) {
            // 비어있다
            // 입력한 단어가 제시어가 됨
            word = newWord;
            $word.textContent = word;
            // 현재 순서
            const order = Number($order.textContent);
            if(order + 1 > number){
                $order.textContent = 1;
            }
            else{
                $order.textContent = order + 1;
            }
        }else{
            alert('올바르지 않은 단어입니다!');
        }
        $input.value = '';
        // input 요소에 focus 주기
        $input.focus();
    };
    const onInput = (event) => {
        newWord = event.target.value;
    };

    $button.addEventListener('click', onClickButton);
    $input.addEventListener('input', onInput);
}
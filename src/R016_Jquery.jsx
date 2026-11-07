import React, { Component} from 'react'
import $ from 'jquery'//jquery 를 임포트해 $ 기호로 선언한것, jquery 를 사용할때 $ 기호를 붙여 사용해야함

class R016_Jquery extends Component {

    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    }

    //화면에서 값 입력하면 input 태그의 val 로 저장됨
    //그래서 $('#inputId).val() 해서 접근할 수 있음
    //버튼을 클릭하면 input_alert 함수가 호출되는것임
    render() {
        return (
            <div>
                <h2>[THIS IS Jquery]</h2>
                <input id="inputId" name="inputName" /> 
                <button id="buttonId" onClick={e => this.input_alert(e)}>
                    Jquery Button
                </button>
            </div>
        )
    }
}

export default R016_Jquery;
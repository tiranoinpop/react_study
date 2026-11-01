import React, { Component } from 'react'

class R010_Variable extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName : ' + varName)
        var varName = 200; // 경고는 뜨나 재선언 가능
        console.log('varName : ' + varName)

        let letName = 'react';
        console.log('letName : ' + letName)
        // let letName = 200; // 재선언 불가
        letName = 200; // 재할당 가능
        console.log('letName : ' + letName)

        const constName = 'react';
        console.log('constName : ' + constName)
        // const constName = 200; // 재선언 불가
        // constName = 200; // 재할당 불가
    }

    render() {
        return (
            <h2>[THIS IS VARIABLE]</h2>
        )
    }
}
export default R010_Variable

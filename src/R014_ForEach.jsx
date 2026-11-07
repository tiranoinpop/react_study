import React, {Component} from 'react';

class R014_ForEach extends Component {
    componentDidMount() {
        var For_Arr = [3, 2, 8, 8];
        var For_NewArr = [];

        for (var i = 0; i < For_Arr.length; i++) {
            For_NewArr.push(For_Arr[i]);
        }
        console.log("1. For_newArr : [" + For_NewArr + "]");

        var ForEach_Arr = [3,3,9,8];
        var ForEach_newArr = [];

        ForEach_Arr.forEach((result)=> {
            ForEach_newArr.push(result);
        })
        console.log("2. ForEach_newArr : [" +ForEach_newArr + "]");
    }
    render() {
        return (
            <h2>[THIS IS Foreach]</h2>
        )
    }
}

export default R014_ForEach
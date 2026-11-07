import React, {Component} from "react";

class R011_SpreadOperator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //javascript Array
        var varArray1 = ['num1', 'num2', 'num3'];
        var varArray2 = ['num4', 'num5', 'num6'];
        var sumVarArr = [varArray1, varArray2];
        console.log('sumVarArr : ' + sumVarArr);
        //ES6 Array
        let sumLetArr = [...varArray1, ...varArray2];
        console.log('sumLetArr : ' + sumLetArr);
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : ' +sum1 + ', sum2 : ' + sum2 + ', remain : ' + remain);

        var varObj1 = {key1:'value1', key2:'value2', key3:'value3'};
        var varObj2 = {key4:'value4', key5:'value5', key6:'value6'};
        //javascript Object
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('sumVarObj : ' + JSON.stringify(sumVarObj));
        //ES6 Object
        let sumLetObj = {...varObj1, ...varObj2};
        console.log('sumLetObj : ' + JSON.stringify(sumLetObj));
        var {key1, key2, ...remainObj} = sumLetObj;
        console.log('4. key1 : ' +key1 + ', key2 : ' + key2 + ', remainObj : ' + JSON.stringify(remainObj));
    }

    render() {
        return (
            <h2>[THIS IS SPREAD OPERATOR]</h2>
        )
    }
}
export default R011_SpreadOperator

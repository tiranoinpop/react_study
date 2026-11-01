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
        
    }

    render() {
        return (
            <h2>[THIS IS SPREAD OPERATOR]</h2>
        )
    }
}
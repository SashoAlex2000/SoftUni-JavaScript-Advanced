function calculator() {
    
    return {
        firstBox: undefined,
        secondBOx: undefined,
        resultBox: undefined,

        init: (selector1, selector2, result) => {
            selector1 = selector1.substring(1);
            selector2 = selector2.substring(1);
            result = result.substring(1);

            this.firstBox = document.getElementById(`${selector1}`);
            this.secondBOx = document.getElementById(selector2);
            this.resultBox = document.getElementById(result);
            // console.log(this.firstBox)
            // console.log(document.getElementById('num1'))
            // console.log(this.firstBox)
            // console.log(this.secondBOx)
            // console.log(this.resultBox)
        },

        add: () => {
            // console.log(this.firstBox)
            let sum = Number(this.firstBox.value) + Number(this.secondBOx.value);
            this.resultBox.value = sum;
        },

        subtract: () => {
            console.log(this.firstBox)
            let sum = Number(this.firstBox.value) - Number(this.secondBOx.value);
            this.resultBox.value = sum;
        },
    }

}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



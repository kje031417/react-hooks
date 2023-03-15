import {useState} from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        // ES6 syntax
        const {target: {value}} = event;        //const value = event.target.value; 와 같음
        let willUpdate = true;
        // 검증기능
        if(typeof validator === "function") {   // validator의 타입이 function이라면,
            willUpdate = validator(value);      // willUpdate의 값을 update
        }
        if(willUpdate) {
            setValue(value);
        }
    }
    return {value, onChange};
};

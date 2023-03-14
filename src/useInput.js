import {useState} from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {target: {value}} = event;
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

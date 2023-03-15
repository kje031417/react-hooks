import {useEffect, useState} from "react";

export const useTitle = (initialTitle) => {
    // state
    const [title, setTitle] = useState(initialTitle);

    // function
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }

    // effect
    useEffect(updateTitle, [title]);

    return setTitle;    // setTitle 리턴
}

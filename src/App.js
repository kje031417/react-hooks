import {useState} from "react";

const content =[
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return ({
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    });
};

const App = () => {
    // state
    /*const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
*/
   /*
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    */

    const {currentItem, changeItem} = useTabs(1, content);

    // view
    return (
        <div className="App">
            <h1>Hello </h1>
            {/*
            <h1>{item}</h1>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
            */}
            {/* <input placeholder="Name" {...name}/>*/}
            {/* ...name : name 안의 모든 것을 풀어줌 (= value={name.value} onChange={name.onChange}) */}
            {content.map((section, index) =>
                (<button onClick={() => changeItem(index)}>
                        {section.tab}
                </button>
                ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;

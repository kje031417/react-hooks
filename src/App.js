import {useEffect, useRef, useState} from "react";
import "./App.css";
import {useInput} from "./useInput";
import {useTabs} from "./useTabs";
import {useTitle} from "./useTitle";
import {useClick} from "./useClick";
import {useConfirm} from "./useConfirm";
import {usePreventLeave} from "./usePreventLeave";
import {useBeforeLeave} from "./useBeforeLeave";
import {useFadeIn} from "./useFadeIn";
import {useNetwork} from "./useNetwork";
import {useScroll} from "./useScroll";
import {useFullscreen} from "./useFullscreen";
import {useNotification} from "./useNotification";
import useAxios from "./useAxios";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];



const App = () => {
    // state
    /**
     * 1 useState
     */
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    /**
     * 2 useInput
     */
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    /**
     * 3 useTabs
     */
    const {currentItem, changeItem} = useTabs(1, content);
    /**
     * 4 useEffect
     */
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);

    // function
    const sayHello = () => {
        console.log("say Hello");
    };
    /**
     * 5 useClick
     */
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => {
        titleUpdater("Home")
    }, 3000);
    const title = useClick(sayHello);
    /**
     * 6 useConfirm & usePreventLeave
     */
        //const potato = useRef();     // useRef() = document.getElementById()
        //setTimeout(() => potato.current.focus(), 3000);
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    /**
     * 7 usePreventLeave
     */
    const {enablePrevent, disablePrevent} = usePreventLeave();
    /**
     * 8 useBeforeLeave
     */
    const begForLife = () => console.log("Plz don't leave");
    useBeforeLeave(begForLife());
    /**
     * 9 useFadeIn & useNetwork
     */
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    const handleNetworkChange = (onLine) => {
        console.log(onLine ? "We just went online" : "We are offline");
    }
    const onLine = useNetwork(handleNetworkChange);
    /**
     * 10 useScroll & useFullscreen
     */
    const {y} = useScroll();

    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const {element, triggerFull, exitFull} = useFullscreen();
    /**
     * 11 useNotification
     */
    const triggerNotif = useNotification("Can I steal your kimchi?", {body: "I love kimchi don't you?"});
    /**
     * 12 useAxios
     */
    const {loading, data, error, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});
    //console.log(`Loading : ${loading}\n Error: ${error}\n Data: ${JSON.stringify(data)}`);
    // effect
    useEffect(sayHello, [aNumber]);

    // view
    return (
        <div className="App" style={{height: "1000vh"}}>
            <h1 ref={title}>React Hooks</h1>
            {/***********************************************************************************************************/}
            <h2>1.useState</h2>
            <h3>{item}</h3>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>2.useInput</h2>
            <input placeholder="Name" {...name}/>
            {/* ...name : name 안의 모든 것을 풀어줌 (= value={name.value} onChange={name.onChange}) */}
            <hr/>
            {/***********************************************************************************************************/}
            <h2>3.useTabs</h2>
            {content.map((section, index) =>
                (<button onClick={() => changeItem(index)}>
                        {section.tab}
                    </button>
                ))}
            <div>{currentItem.content}</div>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>4.useEffect</h2>
            <div>
                <button onClick={() => setNumber(number + 1)}>{number}</button>
                <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
            </div>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>5.useClick</h2>
            <input placeholder="la"/>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>6.useConfirm & usePreventLeave</h2>
            <button onClick={confirmDelete}>Delete the world</button>
            <br/>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>unProtect</button>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>8.useBeforeLeave</h2>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>9.useFadeIn & useNetwork</h2>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>lorem ipsum lalalalala</p>
            <h1>{onLine ? "Online" : "Offline"}</h1>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>10.useScroll & useFullscreen</h2>
                <h1 style={{color: y> 100 ? "red" : "blue"}}>Hi</h1>
                <div ref={element}>
                    <img src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <br/>
                    <button onClick={triggerFull}>Make fullscreen</button>
                    <button onClick={exitFull}>Exit fullscreen</button>
                    <hr/>
                </div>
            {/***********************************************************************************************************/}
            <h2>11. useNotification</h2>
            <button onClick={triggerNotif}>Hello</button>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>12. useAxios</h2>
            <h3>{data && data.status}</h3>
            <h4>{loading && "Loading"}</h4>
            <button onClick={refetch}>Refetch</button>
            <hr/>
            {/***********************************************************************************************************/}
            <h2>13. Conclusions</h2>
            <hr/>
        </div>
    );
}

export default App;

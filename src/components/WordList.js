import React, { Component } from 'react'
import WordItem from './WordItem'

function WordList(props) {
    let display = decideDisplay();
    function decideDisplay(){
        let rd;
        if (props.data !== undefined ) {
            if (props.data.hasOwnProperty(props.read)){
                if(props.data[props.read].length>0){
                    rd = "block";
                    return rd;
                } 
            }
        }
        rd ="none"
        return rd;
    }

    function retArr(){
        let arr = [];
        if (props.data !== undefined) {
            if (props.data.status.msg == "OK") {
                arr = props.data[props.read].map(concept => {
                    return <WordItem con={concept} key={concept.id} min={props.min} />
                })
                if(arr.length == 0){
                    arr.push(<p className="notloaded" key="notloaded">Not found</p>)
                }
            }
        }
        else arr.push(<div className="notloaded" key="notloaded">not loaded yet</div>);
        return arr;
    }



    let arr = retArr();
    return (
        <>
        <div className={"ml-auto mr-auto col-md-8 col-sm-12 "+props.read.split("_list")[0]} style={{display:display}}>
            <h1 className="mainheading">{props.read.split("_list")[0]}</h1>
            {
                arr.map(item => {
                    return item
                })
            }
        </div>
        </>
    )
}

export default WordList

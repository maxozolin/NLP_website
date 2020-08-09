import React, { Component } from 'react'
import QuoteItem from './QuoteItem'

function QuoteList(props) {

    function decideDisplay(){
        if (props.data !== undefined ) {
            if (props.data.hasOwnProperty(props.read)){
                if(props.data[props.read].length>0){
                    display = "block";
                } 
                else{
                    display ="none"
                }
            }
            else{
                display = "none"
            }
        }
        else{
            display =  "none"
        }
    }
    let display
    let arr = [];
    return (
        <>
        {
            decideDisplay()
        }
        <div className={"ml-auto mr-auto col-md-8 col-sm-12 "+props.read.split("_list")[0]} style={{display: display}}>
            <h1 className="mainheading">{props.read.split("_list")[0]}</h1>
            {
                function () {
                    console.log("I RAN", props)
                    if (props.data !== undefined) {
                        console.log(props.data.status.msg == "OK")
                        if (props.data.status.msg == "OK") {
                            arr = props.data[props.read].map(concept => {
                                return <QuoteItem con={concept} key={concept.inip} min={props.minlength}/>
                            })
                            console.log("props data", arr)
                            if(arr.length == 0){
                                arr.push(<p className="notloaded" key="notloaded">Not found</p>)
                            }
                        }
                    }
                    else return <div className="notloaded">not loaded yet</div>;
                }()
            }

            {
                arr.map(item => {
                    return item
                })
            }
        </div>
        </>
    )
}

export default QuoteList

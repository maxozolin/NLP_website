import React, { Component } from 'react'
import WordItem from './WordItem'

function WordList(props) {
    let arr = [];
    return (
        <div className="ml-auto mr-auto col-8">
            <h1 className="mainheading">{props.read.split("_list")[0]}</h1>
            {
                function () {
                    console.log("I RAN", props)
                    if (props.data !== undefined) {
                        console.log(props.data.status.msg == "OK")
                        if (props.data.status.msg == "OK") {
                            arr = props.data[props.read].map(concept => {
                                return <WordItem con={concept} key={concept.id} />
                            })
                            console.log("props data", arr)
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
    )
}

export default WordList

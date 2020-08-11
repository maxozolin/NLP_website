import React, { Component } from 'react'

function WordItem(props) {
    let item = returnItem();
    function returnItem() {
        if (props.con.relevance > props.min) {
            let ri =
                <div className="row ml-auto mr-auto worditem">
                    <div className="col-lg-4 col-sm-6 concepts">{props.con.form}</div>
                    <div className="col-lg-8 col-sm-6 progresswrap">
                        <div className="progress ">
                            <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={props.con.relevance} aria-valuemin="0" aria-valuemax="100" style={{ width: `${props.con.relevance}%` }}></div>
                        </div>
                    </div>
                </div>
            return ri;
        }
    }

    return (
        <>
            {item}
        </>
    )
}

export default WordItem

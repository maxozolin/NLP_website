import React, { Component } from 'react'

function WordItem(props) {

    return (
        <div style={{display : props.con.relevance > 30 ? "block":"none"}}>
            {
                function () {
                    console.log("Worditem I RAN", props)
                }()
            }
            <div className="row ml-auto mr-auto">
                <div className="col-lg-4 col-sm-6">{props.con.form}, {props.con.relevance}</div>
                <div className="col-lg-8 col-sm-6">
                    <div className="progress ">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow={props.con.relevance} aria-valuemin="0" aria-valuemax="100" style={{ width: `${props.con.relevance}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordItem

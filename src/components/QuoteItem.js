import React, { Component } from 'react'

function QuoteItem(props) {
    let item
    return (
        <>
            {
                function () {
                    console.log("QuoteItem I RAN", props, props.min)
                    if (props.con.form.length>props.min-length) {
                        item =
                        <div className="row ml-auto mr-auto quote-wrapper">
                            <div className="quote">{props.con.form}</div>
                        </div>
                    }
                }()
            }
            {item}
        </>
    )
}

export default QuoteItem
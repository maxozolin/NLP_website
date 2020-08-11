import React, { Component } from 'react'



function QuoteItem(props) {
    let item = returnItem()
    function returnItem() {
        if (props.con.form.length>props.min) {
            let ri =
            <div className="row ml-auto mr-auto quote-wrapper">
                <div className="quote">{props.con.form}</div>
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

export default QuoteItem
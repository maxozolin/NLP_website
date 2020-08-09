import React, { useState, useEffect, useRef } from 'react';
import WordList from './WordList'
import QuoteList from './QuoteList'
import uuid from 'uuid'

const LOCAL_STORAGE_KEY = 'websiteApp.appData'

function App() {

    const [appData, changeData] = useState(undefined)
    const websiteNameRef = useRef()


    useEffect(() => {
        console.log("storage :", localStorage.getItem(LOCAL_STORAGE_KEY), localStorage.getItem(LOCAL_STORAGE_KEY)=="undefined")
        if(localStorage.getItem(LOCAL_STORAGE_KEY)=="undefined") return
        const storedAppData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedAppData) changeData(storedAppData)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appData));
    }, [appData])


    let callApi = async (e) => {
        e.preventDefault()
        let url = websiteNameRef.current.value;
        console.log(url)
        if (url == "") return

        console.log("CLICKED")
        const settings = {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "url": url })
        };
        try {
            //Post coords to server
            const res = await fetch(`/api/app`, settings);
            // console.log(res.json())

            try {
                //get back data
                let dat = await res.json();
                console.log(dat)
                changeData(() => {
                    return dat;
                });
                console.log(appData);
            } catch (error) {
                //if there is an error in the connection log it with the data recieved
                console.log("error", error, dat);
            }
        } catch (e) {
            return e;
        }


    }

    return (
        <>
            <form className="col-md-7 mr-auto ml-auto">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Website</label>
                    <input type="text" className="form-control" id="websiteInput" aria-describedby="websiteInput" ref={websiteNameRef} />
                    <small id="emailHelp" className="form-text text-muted">Enter the webite to be examined</small>
                </div>
                <button className="btn btn-primary" onClick={callApi}>Submit</button>
            </form>
            <WordList data={appData} read="concept_list" min={40}/>
            <WordList data={appData} read="entity_list" min={5}/>
            <QuoteList data={appData} read="quotation_list" minlength={40}/>
            

        </>
    );
}
export default App
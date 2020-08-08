import React, { useRef, useState} from 'react';



function Form() {

    const [appData, changeData] = useState(undefined)

    let callApi = async (e) => {
        e.preventDefault()
        console.log("CLICKED")
        const settings = {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"url":"https://www.udacity.com/"})
        };
        try {
            //Post coords to server
            const res = await fetch(`http://localhost:5000/app`, settings);
            // console.log(res.json())
    
            try {
                //get back data
                let dat = await res.json();
                console.log(dat)
                changeData(appData = dat);
                console.log(appData);
              }  catch(error) {
                //if there is an error in the connection log it with the data recieved
                console.log("error", error, dat);
            }
        } catch (e) {
            return e;
        }    
      
    
    }
    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Website</label>
                <input type="text" className="form-control" id="websiteInput" aria-describedby="websiteInput" />
                <small id="emailHelp" className="form-text text-muted">Enter the webite to be examined</small>
            </div>
            <button className="btn btn-primary" onClick={callApi}>Submit</button>
        </form>
        {appData ? appData.concept_list.map( li => <h2>li.form</h2>) : <></>}
        </>
    )
}

export default Form
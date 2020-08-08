import React from 'react';
class Form extends React.Component {

constructor(){
    super()
    this.state = {data:["",""]}
}

componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

//POST COORDINATES
callApi = async (e) => {
    e.preventDefault()
    console.log("CLICKED")
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        //Post coords to server
        const res = await fetch(`http://localhost:5000/app`, settings);
        // console.log(res.json())

        try {
            //get back data
            let dat = await res.json();
            console.log(dat.message)
          }  catch(error) {
            //if there is an error in the connection log it with the data recieved
            console.log("error", error, dat);
        }
    } catch (e) {
        return e;
    }    
  

}

 render() {
  return(
    <form>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Website</label>
        <input type="text" className="form-control" id="websiteInput" aria-describedby="websiteInput"/>
        <small id="emailHelp" className="form-text text-muted">Enter the webite to be examined</small>
    </div>
    <button className="btn btn-primary" onClick={this.callApi}>Submit</button>
    {this.state.data.map(message => <h2>{message}</h2>)}
    </form>
  );
 }
}
export default Form
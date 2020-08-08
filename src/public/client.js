// console.log("Hello there")

postLoc = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        //Post coords to server
        const res = await fetch(`/app`, settings);
        try {
            //get back data
            dat = await res.json();
            console.log(dat);
          }  catch(error) {
            //if there is an error in the connection log it with the data recieved
            console.log("error", error, dat);
        }
    } catch (e) {
        return e;
    }   
}
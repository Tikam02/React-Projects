




const newQoute = () => {
    //Pick a random qoute from array
    const qoute = apiQoute[Math.floor(Math.random()*apiQoute.length)];
    //If Author field is unknown replace it with unknown
    // if(!qoute.author) {
    //     authorText.textcontent = 'Unknown';
    // }else{
    //     authorText.textcontent = qoute.author;
    // }
    // //check qoute length to determine styling
    // if ()
}





const getQoutes =  async() => {
    const url = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(url);
        apiQoute = await response.json();
        console.log(apiQoute);
        newQoute();
    }catch(err){
        console.log(err);
        newQoute();
    }
}

getQoutes();
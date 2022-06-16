import React, { useState, useEffect } from 'react'

const Scroll = () => {
    const [imageObjects, setImageObjects] = useState([]);


    var mynumber = 100;
    var arr = new Array(mynumber);

    for (var i = 0; i < mynumber; i++) {
        arr[i] = (i + 1).toString();
    }

    useEffect(() => {
        fetchImages();
        window.addEventListener("scroll", handleScroll); // attaching scroll event listener
    }, []);

    const fetchImages = () => {
        //here you will check  the current page and total pages 
        // fetch images from Unsplash API and append them to imageObjects state
        console.log("Fetch images")
    };


    const handleScroll = () => {
        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;
        // console.log("userScrollHeight", userScrollHeight, "==", windowBottomHeight)
        if (userScrollHeight >= windowBottomHeight) {
            fetchImages();
        }
    };

    return (
        < div  >
            {arr.map((item, index) => <div>{item}</div>)}

        </div>

    );
}

export default Scroll
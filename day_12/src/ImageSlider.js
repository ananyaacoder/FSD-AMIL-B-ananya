import React, { useState } from 'react'
const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgiNOgVPpmmshtByBhiPxyps1z5cO5EBbzZG3DOWg9g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IxS7rRMJr3riQtgc9ICqxz5INAyA_36tusqq_z-sCg&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKE-5yS5AfTyT9Y-do7ca0os-fHUD0NaGXVDjB547Ww&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzm1_0NH5Q7kxsJBBsfh_3E7UQBdYezuTFRC3O3Ziw9la6BY4hHuZ-zsR&s=10"
    ]
    const left = () => {
        setIndex((index - 1 + images.length) % images.length);
    }
    const right = () => {
        setIndex((index + 1) % images.length)
    }
    return (
        <div style={{ textAlign: "center" }}><h1 style={{ backgroundColor: "black", color: "white" }}>
            ImageSlider</h1>
            <img src={images[index]}
                alt="img-here"
                style={{ height: "200px", width: "200px" }}></img>
            <button style={{backgroundColor:"grey", color:"white"}} onClick={left}>Left</button>
            <button style={{backgroundColor:"grey", color:"white"}} onClick={right}>Right</button></div>
    )
}
export default ImageSlider
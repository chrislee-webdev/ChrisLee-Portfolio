// PhotoList-Component

import React from "react"

import image from '../../assets/images/image1.jpg';

function PhotoList() {

    // const [image] = useState([
    //     {
    //       name: 'Grocery aisle',
    //       category: 'portfolio',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //     },
    //     {
    //       name: 'Grocery booth',
    //       category: 'portfolio',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //     },
    //     {
    //       name: 'Building exterior',
    //       category: 'portfolio',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    //     }
    // ]);

    return (
        <div>
            <img
                src={image}
                alt="Project Example"
            />
        </div>
    )
}

export default PhotoList;
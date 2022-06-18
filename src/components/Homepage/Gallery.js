import React from 'react';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
// import Images from '../../../public/artworks'
import Image from 'next/image';

const Gallery = () => {
    return (
        <> 
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w7xl ">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3  ">
                    {/* images will go here */}
                    <img src='artworks/1.png'></img> <img src='artworks/2.png'></img> <img src='artworks/3.png'></img>
                </div>
            </div>
        </>
    )       
}

export default Gallery;

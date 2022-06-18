import Image from 'next/image'
import { artworks } from '../../../public/artworks'

const Card = () => {
  return (
        <>
            { artworks.map((artwork) =>{
                <Image 
                    key={artwork.src}
                    width={artwork.width}
                    height={artwork.height}
                    src={artwork.src}
                    alt={artwork.alt}
                />
            }) } 
        </>
    );
};

export default Card;
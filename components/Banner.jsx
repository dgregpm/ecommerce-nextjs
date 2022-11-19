import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0'/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                >
                
                <div>
                    <img loading='lazy' src="https://links.papareact.com/gi1" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://links.papareact.com/6ff" alt="" />
                </div>
                {/* <div>
                    <img loading='lazy' src="https://links.papareact.com/7ma" alt="" />
                </div> */}
                <Image 
                className=''
                src='https://links.papareact.com/7ma'
                // layout='fill'
                width={1920}
                height={1080}
                alt={''}
                />

            </Carousel>

        </div>
    );
}

export default Banner;
import Image from 'next/image';

const Preloader = () => {
    return(
        <div className="preloaderHolder">
            <div className="leftT"></div>
            <div className="rightT"></div>
            <div className="leftD"></div>
            <div className="rightD"></div>
        </div>
    )
};

export default Preloader;
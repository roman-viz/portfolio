import './main.scss'
import { Helmet } from "react-helmet-async";
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';

function Main() {

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)           
    }, [])

    return (
        <div className={loadingDone ? 'main done' : 'main'}>
            <Loader />
            <Helmet>
                <title>Portfolio - Home</title>
            </Helmet>
            <div className="bgShape"></div>
            <div className="main_img">
                <img src="assets/img/main_portrait.webp" alt="My portrait" />
            </div>
            <div className="main_desc">


                <h1>I'm Roman Viznij
                    <br></br>
                    <span>Frontend developer</span>
                </h1>
                <p>Frontend developer with experience building enterprise Angular applications,
                    React products and cross-platform mobile apps. I focus on maintainable
                    architecture, smooth user experiences and reliable delivery.</p>
            </div>
        </div>
    )
}

export default Main;

import './loader.scss';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprites from '../../icons/icons.svg';

function Loader() {

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    return createPortal(
        <div className={loadingDone ? 'loader done' : 'loader'}>
            <svg>
                <use href={sprites + '#send'} />
            </svg>
        </div>,
        document.body
    )
}

export default Loader;


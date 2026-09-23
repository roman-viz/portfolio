import './works.scss';
import Heading from '../../components/Heading/Heading';
import sprites from '../../icons/icons.svg';
import { Helmet } from "react-helmet-async";
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';

const defaultProjectImage = '/assets/img/works/default.webp';

function Works() {

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    const works = {
        'fat-finger': {
            heading: 'Fat Finger',
            project: 'enterprise web application',
            client: 'IQua',
            languages: 'Angular, TypeScript, RxJS, shared UI library',
            img: '/assets/img/works/fatFinger.webp',
        },
        'symphony-taxonomy': {
            heading: 'Symphony Taxonomy UI',
            project: 'enterprise ad-tech application',
            client: 'IQua',
            languages: 'Angular, spreadsheet generator, Cypress, Karma/Mocha',
        },
        'symphony-campaign-builder': {
            heading: 'UI Campaign Builder',
            project: 'media campaign setup application',
            client: 'IQua',
            languages: 'Angular, TypeScript, workbook UI, REST APIs',
        },
        'symphony-mdm': {
            heading: 'UI MDM Application',
            project: 'data management application',
            client: 'IQua',
            languages: 'Angular, schema-driven grids, Playwright',
        },
        'fittra-pm': {
            heading: 'Fittra PM',
            project: 'project management platform',
            client: 'construction company',
            languages: 'React, Firebase, Firestore, Cloud Functions, MCP',
            img: '/assets/img/works/fittra.webp',
        },
        'factme': {
            heading: 'FactMe',
            project: 'cross-platform mobile application',
            client: '-',
            languages: 'Angular, Ionic, Capacitor, Firebase',
            img: '/assets/img/works/factMe.webp',
        },
        'absences-calendar': {
            'heading': 'absences calendar',
            'project': 'web appliaction',
            'client': 'pet project',
            'languages': 'Angular, NGRX, Reactive Forms, Moment.JS, A. Material, NestJS, PostgreSQL/TypeORM',
            'preview': 'https://calendar-front-rosy.vercel.app/login',
            'img': '/assets/img/works/angu-calendar.webp',
        },
        'knife-store': {
            'heading': 'online store',
            'project': 'web appliaction',
            'client': 'pet project',
            'languages': 'React, SCSS',
            'preview': 'https://store-project-local-db.vercel.app/',
            'img': '/assets/img/works/react-store-project.webp',
        },
        'gradient-generator': {
            'heading': 'gradient generator',
            'project': 'website',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/gradient-generator/',
            'img': '/assets/img/works/gradient.webp',
        },
        'rootz': {
            'heading': 'Rootz',
            'project': 'website',
            'client': 'pet project',
            'languages': 'React, SCSS, Swiper, Parallax',
            'preview': 'https://halo-test-red.vercel.app/',
            'img': '/assets/img/works/rootz.webp',
        },
        'roza-vitriv': {
            'heading': 'Roza Vitriv',
            'project': 'website',
            'client': 'Ivan Nebela',
            'languages': 'HTML, SCSS, JS, WOW.JS, Animate.CSS',
            'preview': 'https://starsetphenomenon.github.io/polonyna/',
            'img': '/assets/img/works/polonyna.webp',
        },
        'custom-gallery': {
            'heading': 'Custom Gallery',
            'project': 'script',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/custom-gallery/',
            'img': '/assets/img/works/custom-gallery.webp',
        },
        'slider-swiper': {
            'heading': 'Slider Swiper',
            'project': 'script',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/slider/',
            'img': '/assets/img/works/slider-swiper.webp',
        },
        'password-generator': {
            'heading': 'Password Generator',
            'project': 'website',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/password-generator/',
            'img': '/assets/img/works/password-generator.webp',
        }
    }

    const projectGroups = {
        cv: ['fat-finger', 'fittra-pm', 'factme', 'symphony-taxonomy', 'symphony-campaign-builder', 'symphony-mdm'],
        pet: ['absences-calendar', 'knife-store', 'gradient-generator', 'rootz', 'roza-vitriv', 'custom-gallery', 'slider-swiper', 'password-generator']
    };

    const [activeTab, setActiveTab] = useState('cv');
    const sliderKeys = projectGroups[activeTab];

    const [active, setActive] = useState(false);

    const handleTab = (tab) => {
        setActive(false);
        setActiveTab(tab);
    };

    const handleWork = (e) => {
        e.stopPropagation()
        setActive(prev => !prev)
    }




    const nextSlide = () => {
        let index = sliderKeys.indexOf(active);
        if (index >= sliderKeys.length - 1) {
            index = -1;
        }
        const slide = sliderKeys[index + 1];
        setActive(slide)
    }

    const prevSlide = () => {
        let index = sliderKeys.indexOf(active);
        if (index <= 0) {
            index = sliderKeys.length;
        }
        const slide = sliderKeys[index - 1];
        setActive(slide)
    }

    return (
        <div className={loadingDone ? 'works done' : 'works'}>
            <Loader />
            <Helmet>
                <title>Works</title>
            </Helmet>
            {active && <div onClick={handleWork} className="wrapper"></div>}
            <Heading parVal={[-180, 0]} heading="My" hspan="portfolio" span="works" />
            <div className="project_tabs" role="tablist" aria-label="Project categories">
                <button
                    className={activeTab === 'cv' ? 'active' : ''}
                    onClick={() => handleTab('cv')}
                    role="tab"
                    aria-selected={activeTab === 'cv'}
                >
                    Selected
                </button>
                <button
                    className={activeTab === 'pet' ? 'active' : ''}
                    onClick={() => handleTab('pet')}
                    role="tab"
                    aria-selected={activeTab === 'pet'}
                >
                    Personal
                </button>
            </div>
            <div className="portfolio">
                <div className={active ? 'info active' : 'info'}>
                    <div className="navBtns">
                        <div onClick={nextSlide} className="next">
                            <svg>
                                <use href={sprites + '#arrow'} />
                            </svg>
                        </div>
                        <div onClick={prevSlide} className="prev">
                            <svg>
                                <use href={sprites + '#arrow'} />
                            </svg>
                        </div>
                    </div>
                    <div onClick={handleWork} className="close">
                        <span></span>
                        <span></span>
                    </div>
                    <h3>{works[active]?.heading}</h3>
                    <div className="desc">
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#project'} />
                            </svg>
                            <span>Type: </span>
                            <h4>{works[active]?.project}</h4>
                        </div>
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#user'} />
                            </svg>
                            <span>Client: </span>
                            <h4>{works[active]?.client}</h4>
                        </div>
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#code'} />
                            </svg>
                            <span>Stack: </span>
                            <h4>{works[active]?.languages}</h4>
                        </div>
                        {works[active]?.preview && <div className="desc_item">
                            <svg>
                                <use href={sprites + '#link'} />
                            </svg>
                            <span>Preview: </span>
                            <a rel="noreferrer" target="_blank" href={works[active]?.preview}>link</a>
                        </div>}
                    </div>
                    <div className="desc_img">
                        <img src={works[active]?.img || defaultProjectImage} alt={works[active]?.heading} />
                    </div>
                </div>

                {sliderKeys.map((key) => (
                    <div key={key} name={key} onClick={() => setActive(key)} className="item">
                        <img src={works[key].img || defaultProjectImage} alt={works[key].heading} />
                        <div className="cover">
                            <h3>{works[key].heading}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works;



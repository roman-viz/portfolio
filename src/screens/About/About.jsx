import './about.scss';
import Heading from '../../components/Heading/Heading';
import sprites from '../../icons/icons.svg';
import ButtonPrim from '../../components/ButtonPrim/ButtonPrim';
import { Helmet } from "react-helmet-async";
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';

const skills = [
    { label: 'HTML5', icon: 'html' },
    { label: 'CSS3', icon: 'css' },
    { label: 'JavaScript', icon: 'js' },
    { label: 'TypeScript', icon: 'ts' },
    { label: 'React', icon: 'react' },
    { label: 'Angular', icon: 'angular' },
    { label: 'NgRx', icon: 'ngrx' },
    { label: 'SASS / SCSS', icon: 'sass' },
    { label: 'Bootstrap', icon: 'bootstrap' },
    { label: 'Tailwind CSS', icon: 'tailwind' },
    { label: 'PrimeNG', icon: 'primeng' },
    { label: 'Node.js', icon: 'node' },
    { label: 'Express.js', icon: 'express' },
    { label: 'Docker', icon: 'docker' },
    { label: 'Gulp', icon: 'gulp' },
    { label: 'Nx', icon: 'nx' },
    { label: 'Git', icon: 'git' },
    { label: 'Firebase', icon: 'firebase' },
    { label: 'WordPress', icon: 'wordpress' },
    { label: 'Ionic', icon: 'ionic' },
    { label: 'Capacitor', icon: 'capacitor' },
    { label: 'Figma', icon: 'figma' },
    { label: 'Jasmine', icon: 'jasmine' },
];


function About() {

    let dob = '19961008';
    let year = Number(dob.substr(0, 4));
    let month = Number(dob.substr(4, 2)) - 1;
    let day = Number(dob.substr(6, 2));
    let today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    return (
        <div className={loadingDone ? 'about done' : 'about'}>
            <Loader />
            <Helmet>
                <title>About</title>
            </Helmet>
            <Heading parVal={[-180, 0]} heading="About" hspan="me" span="resume" />
            <div className="about_infos">
                <h3>Personal infos</h3>
                <ul className='personal_infos'>
                    <li>
                        <span className='title'>
                            First name:
                        </span>
                        <span className='desc'>
                            Roman
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Last name:
                        </span>
                        <span className='desc'>
                            Viznij
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Age:
                        </span>
                        <span className='desc'>
                            {age}
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Freelance:
                        </span>
                        <span className='desc green'>
                            Available
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Phone:
                        </span>
                        <span className='desc'>
                            (+380) 97-688-94-29
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Email:
                        </span>
                        <span className='desc'>
                            ron.viz.dev@gmail.com
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Languages:
                        </span>
                        <span className='desc'>
                            Ukrainian, English, Hungarian
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Based in:
                        </span>
                        <span className='desc'>
                            Rakhiv, Ukraine
                        </span>
                    </li>
                </ul>

                <a href="/assets/CV — Junior front-end developer, Roman Viznij.pdf" download>
                    <ButtonPrim text="Download CV">
                        <svg>
                            <use href={sprites + '#download'} />
                        </svg>
                    </ButtonPrim>
                </a>


            </div>
            <div className="experience">
                <h3>Experience & education</h3>
                <div className="exp_edu">
                    <ul className="exp">
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#case'} />
                                </svg>
                            </div>
                            <span>Dec 2022 - Sep 2026</span>
                            <h5>Frontend Developer</h5>
                            <h4>IQua</h4>
                        </li>
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#case'} />
                                </svg>
                            </div>
                            <span>Oct 2021 - Sep 2022</span>
                            <h5>Markup Developer</h5>
                            <h4>Freelance</h4>
                        </li>
                    </ul>
                    <ul className="edu">
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#education'} />
                                </svg>
                            </div>
                            <span>Sep 2013 - May 2017</span>
                            <h5>Bachelor's degree - Mathematics and Informatics</h5>
                            <h4>FERENC RAKOCZY II.
                                TRANSCARPATHIAN HUNGARIAN
                                COLLEGE OF HIGHER EDUCATION
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skills">
                <h3>Skills & tools</h3>
                <div>
                    <div className="skills_main">
                        <div className="skills_wrapper">
                            {skills.map(({ label, icon }) => (
                                <div className="skill" key={label} title={label}>
                                    <svg className={icon} aria-label={label} role="img">
                                        <use href={sprites + `#${icon}`} />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;

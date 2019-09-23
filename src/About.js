import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function About() {
    const { loading, error, data } = useQuery(gql`
        {
            AboutCompany{
                aboutTitle,
                aboutContent1,
                aboutContent2,
                aboutContent3
            }
        }
    `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            <nav id="nav">
                <button className="nav-icon" id="nav-icon" onClick={function () {
                    document.getElementById('nav').classList.contains('active') ? document.getElementById('nav').classList.remove('active') : document.getElementById('nav').classList.add('active'); }}>
                    <span></span>
                </button>
                <ul>
                    <li><a href={"/Home"}>Introduction</a></li>
                    <li><a href={"/About"}>About</a></li>
                    <li><a href={"/Goals"}>Goals</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
            <section id="about">
                <h2> {data.AboutCompany.aboutTitle} </h2>
                <p> {data.AboutCompany.aboutContent1}</p>
                <p> {data.AboutCompany.aboutContent2}</p>
                <p> {data.AboutCompany.aboutContent3}</p>
            </section>
        </div>
    )

    
}

export default About;

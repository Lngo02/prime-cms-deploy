import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function Home() {
    const { loading, error, data } = useQuery(gql`
        {
            Introduction {
                introductionTitle,
                whoHeading,
                whoContent,
                whatHeading,
                whatContent,
                howHeading,
                howContent
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
                    <li><a href={"/prime-cms-deploy/About"}>About</a></li>
                    <li><a href={"/prime-cms-deploy/Goals"}>Goals</a></li>
                    <li><a href={"/prime-cms-deploy/JobDescription"}>The Job</a></li>
                    <li><a href={"/prime-cms-deploy/Conclusion"}>Conclusion</a></li>
                </ul>
            </nav>
            <section id="introduction">
                <h2> {data.Introduction.introductionTitle} </h2>
                <h3> {data.Introduction.whoHeading}</h3>
                <p> {data.Introduction.whoContent} </p>
                <h3> {data.Introduction.whatHeading}</h3>
                <p> {data.Introduction.whatContent} </p>
                <h3> {data.Introduction.howHeading}</h3>
                <p> {data.Introduction.howContent} </p>
            </section>
        </div>
    )

    
}

export default Home;

/*
 * Full table of contents
    <li><a href={"/prime-cms-deploy/"}>Introduction</a></li>
    <li><a href={"/prime-cms-deploy/About"}>About</a></li>
    <li><a href={"/prime-cms-deploy/Goals"}>Goals</a></li>
    <li><a href={"/prime-cms-deploy/JobDescription"}>Job Description</a></li>
    <li><a href={"/prime-cms-deploy/Conclusion"}>Conclusion</a></li>
 */

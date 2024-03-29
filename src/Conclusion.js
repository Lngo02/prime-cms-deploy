import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function Conclusion() {
    const { loading, error, data } = useQuery(gql`
        {
            Conclusion{
              conclusionTitle,
              conclusionContent
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
                    <li><a href={"/prime-cms-deploy/"}>Introduction</a></li>
                    <li><a href={"/prime-cms-deploy/About"}>About</a></li>
                    <li><a href={"/prime-cms-deploy/Goals"}>Goals</a></li>
                    <li><a href={"/prime-cms-deploy/JobDescription"}>The Job</a></li>
                </ul>
            </nav>
            <section id="JobOverview">
                <h2> {data.Conclusion.conclusionTitle} </h2>
                <p> {data.Conclusion.conclusionContent} </p>
            </section>
        </div>
    )

    
}

export default Conclusion;

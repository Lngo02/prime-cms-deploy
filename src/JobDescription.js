import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function JobDescription() {
    const { loading, error, data } = useQuery(gql`
        {
            JobOverview{
		        jobDescriptionTitle,
                jobOverviewHeading,
                jobOverviewContent,
                interestingAspectsHeading,
                interestingAspectsContent,
                skillsDevelopedHeading,
                skillsDevelopedContent,
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
                    <li><a href={"/prime-cms-deploy/Conclusion"}>Conclusion</a></li>
                </ul>
            </nav>
            <section id="JobOverview">
                <h2> {data.JobOverview.jobDescriptionTitle} </h2>
                <h3> {data.JobOverview.jobOverviewHeading}</h3>
                <p> {data.JobOverview.jobOverviewDescription} </p>
                <h3> {data.JobOverview.interestingAspectsHeading}</h3>
                <p> {data.JobOverview.interestingAspectsContent} </p>
                <h3> {data.JobOverview.skillsDevelopedHeading}</h3>
                <p> {data.JobOverview.skillsDevelopedContent} </p>
            </section>
        </div>
    )

    
}

export default JobDescription;

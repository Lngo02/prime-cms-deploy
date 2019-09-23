import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function Goals() {
    const { loading, error, data } = useQuery(gql`
        {
            GoalsIntroduction{
                goalsTitle,
                goalsIntroduction,
            }
	        allGoals{
		        edges {
			        node{
				        goalHeading,
                        goalDescription,
                        goalImpact
                    }
                }
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
                    <li><a href={"/prime-cms-deploy/JobDescription"}>Job Description</a></li>
                    <li><a href={"/prime-cms-deploy/Conclusion"}>Conclusion</a></li>
                </ul>
            </nav>
            <div>
                <section>
                    <h2> {data.GoalsIntroduction.goalsTitle} </h2>
                    <p>  {data.GoalsIntroduction.goalsIntroduction} </p>
                </section>
                {
                    data.allGoals.edges.slice(0).map((item, index) => (
                        <section key={index}>
                            <h3>{item.node.goalHeading}</h3>
                            <p>{item.node.goalDescription}</p>
                            <p>{item.node.goalImpact}</p>
                        </section>
                    ))
                }  
            </div>
        </div>
    )

    
}

export default Goals;

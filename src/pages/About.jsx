import { useEffect } from 'react';
import Me from '../assets/naps.jpg';
import Php from '../assets/php.jpg';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.jpg';
import React from '../assets/logo192.png';
import Mongo from '../assets/mongo.png';
import MySql from '../assets/mysql.jpg';
import Mssql from '../assets/mssql.png';
import Ajax from '../assets/ajax.jpg';
import Java from '../assets/java.png';
import Golang from '../assets/golang.png';
import Tailwind from '../assets/projects/tailwind.png';
import Laravel from '../assets/laravel.png';
import Vue from '../assets/vue.png';
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
    const primary = [
        {label:'Php',img:Php},
        {label:'JavaScript',img:JavaScript},
        {label:'NodeJs',img:Node},
        {label:'React', img: React},
        {label:'MongoDB', img: Mongo},
        {label:'MySQL', img: MySql},
        {label:'Laravel', img: Laravel},
    ];
    const fundamentals = [
        {label:'GoLang',img:Golang},
        {label:'Java',img:Java},
        {label:'MSSQL',img:Mssql},
        {label:'Ajax/JQUERY',img:Ajax},
        {label:'Tailwind CSS',img:Tailwind},
        {label:'Vue js', img: Vue}
        
    ];
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <div className="body">
            <div className="about">
                <img className="meImg" alt='' src={Me}/>
            </div>
            <div className='details'>
                  My name is Christopher P. Napoles born in August 1, 1999 currently lives in Santolan Pasig City.
                  I graduated at the Technological University of the Philippines with a Bachelor of Science in Information Technology
                  Degree. I am a web developer who is knowledgable on the following web development tools:
            </div>
            <div className='images'>
                {
                    primary.map(e=>(
                        <div data-aos="fade" data-aos-once="false" className='icons-container'>
                            <img className='icons' alt='' src={e.img}/>
                            <div className='icons-label'>{e.label}</div>
                        </div>
                    ))
                }
            </div>
            <div className='details'>
                 I also have Fundamental knowledge on other development tools like:
            </div>
            <div className='images'>
                {
                    fundamentals.map(e=>(
                        <div data-aos="fade" data-aos-once="false" className='icons-container'>
                            <img className='icons' alt='' src={e.img}/>
                            <div className='icons-label'>{e.label}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default About
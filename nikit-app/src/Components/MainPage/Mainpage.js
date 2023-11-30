import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import './MainPage.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FixedMade from "../Columns/FixedMade/FixedMade";
import Cards from "../Columns/Cards/Cards";


export default function Mainpage(props) {
    const { MainPageActions, loading ,hamburger} = props
    useEffect(() => {
        setTimeout(() => {
            MainPageActions.loading()
        }, 2000)
    }, [])
    return (
        <React.Fragment>
             <section className={ "MainPage_container "}>
                {loading ?
                    <>
                         <Header {...props} />
                         <Routes>
                            <Route path="/" element={<Cards {...props}/>}/>
                        </Routes>
                        <Footer {...props} /> 
                        {/* <FixedMade/> */}
                    </>
                    : <div className="loading">Loading...</div>}
             </section> 

        </React.Fragment>
    );
}

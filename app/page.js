"use client";
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link'; 


import React from 'react';


// import { useSelector } from 'react-redux';
import HeroSection from './(components)/HeroSection';
import Main from './(components)/Main';
import EnhaceCv from './(components)/enhaceCv';
import { CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';
import NewsletterSubscription from './(components)/Newsletter';
import CareerResources from './(components)/CareerResources';



export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  useEffect(() => {
    if (isSignedIn) {
      // fetch("/api/sync-user"); // GET request
     // grabs all cookies from the request context
        fetch("http://localhost:3000/api/sync-user");
    }
  }, [isSignedIn]);

  return (
    <>
   
        <div 
        // className=" pt-16  bg-gradient-to-r from-pink-50 via-red-50 to-yellow-50"
        className= "pt-16 w-full relative"
        >
          <HeroSection />
          <Main />
          {/* <EnhaceCv /> */}
          <NewsletterSubscription />
          
          <CareerResources />
       
          
        </div>

   
     
    </>
  );
}

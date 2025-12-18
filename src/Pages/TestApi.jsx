import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';
import { h1 } from 'motion/react-client';

const TestApi = () => {
    const [loading, setLoading] = useState(true);

    const [Categories, setCategories ]= useState ([
        {title:"",
        projectst:[]
        

        }

    ]);

    useEffect(()=>{
   async function callGetAPI(){
  
  const res = await supabase.from("Categories").select("*");
 setCategories(res.data); 
setLoading(false);


    }
    callGetAPI();
    },[])
 if (loading) return <p>Loading...</p>;
    return ( <>
    <h1>hhhhhiiiiii</h1>
    {/* <p>
        {Categories[0].title}
    </p> */}
    {console.log(Categories)}
    {/* <img src="" alt="" /> */}
    {
        
        Categories[0].projectst.map((c)=>{
            return <p>{c}</p>
        })
        
    }
    </>  );
}
 
export default TestApi ;
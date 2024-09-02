'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const Home = () => {
  const contentful = require('contentful')
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://cdn.contentful.com/spaces/sqxv0civ01pv/environments/master/entries?access_token=a1LbwIx0L4v4Y1L7Eo8Bl5rlaBRMjSwEFWEgzyA7qag');
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  const client = contentful.createClient({
    space: 'sqxv0civ01pv',
    environment: 'master',
    accessToken: 'a1LbwIx0L4v4Y1L7Eo8Bl5rlaBRMjSwEFWEgzyA7qag'
  });
  
  client.getEntries()
  .then((response) => setData(response.items))
  .then(setLoading(false))
  .catch(console.error)

  if (setLoading == true){
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='font-bold'>Contentful Data</h1>
      {data.map((item, index) => (
        <Link href={`/project/${item.slug}`} key={index}>
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
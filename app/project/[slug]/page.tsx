  'use client'
  import { useRouter } from "next/navigation";
  import React, { useState, useEffect } from "react";
  import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
  import { usePathname } from "next/navigation";
  import Image from "next/image";
  const contentful = require('contentful')

  const postPage = () => {
    const pathname = usePathname();
    const slug = pathname.replace('/project/', '');
    const [post, setPost] = useState(null);

    // useEffect(() => {
    //   const fetchPost = async () => {
    //     try {
    //       const response = await fetch(`https://cdn.contentful.com/spaces/sqxv0civ01pv/environments/master/entries?access_token=a1LbwIx0L4v4Y1L7Eo8Bl5rlaBRMjSwEFWEgzyA7qag&content_type=projects&fields.slug=${slug}`);
    //       const data = await response.json();
    //       setPost(data.items[0]);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //   fetchPost();
    // }, [slug]);
    
    // if(!post) {
    //   return <div>Loading...</div>
    // }

    const client = contentful.createClient({
      space: 'sqxv0civ01pv',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'a1LbwIx0L4v4Y1L7Eo8Bl5rlaBRMjSwEFWEgzyA7qag'
    })
    
    client.getEntries()
    .then((response) => console.log(response.items))
    .catch(console.error)



    return (
      <div>
        {/* <h1>{post.fields.title}</h1>
        <Image src={mainImageUrl} alt={post.fields.title} width={500} height={500} />
        <p>{post.fields.category}</p><br/><br/>
        {documentToReactComponents(post.fields.projectDescription1)}<br/><br/>
        {documentToReactComponents(post.fields.projectDescription2)}<br/><br/>
        {documentToReactComponents(post.fields.projectDescription3)} */}
      </div>
    )

  }

  export default postPage;
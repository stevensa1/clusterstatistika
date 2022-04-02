import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className ="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                {slug ? 'Related Posts' : "Recent Posts"}
            </h3>
            {relatedPosts.map((post) =>(
                <div key={post.title} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                        <Image
                            alt = {post.title}
                            unoptimized
                            height="60px"
                            width="60px"
                            className="w-full align-middle rounded-full bg-cover object-cover"
                            src={post.featuredimage.url}
                        />
                    </div>
                    <div className="flex-grow ml-4">
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md font-medium">
                            {post.title}
                        </Link>
                        <p className="text-gray-500 font-xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget;
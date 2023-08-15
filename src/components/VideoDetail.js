import React from 'react';
import YoutubeVideo from './YoutubeVideo';
import Navbar from './Navbar';
import Comments from './Comments';
import Product from './Products';
import CommentForm from './CommentForm';

export default function VideoDetail(props) {
    return (
        <>
        <Navbar />
        <YoutubeVideo style={{ marginTop: '5000px' }} />
        <Product />
        <CommentForm />
        <Comments />
        </>
    );
}

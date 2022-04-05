import React from 'react';

const SemanticTag = () => {
    return (
        <div className='container py-8'>
            <h2 className='text-3xl text-center font-semibold'>Semantic Tag</h2>
            <h3 className='text-2xl my-5'>What is Semantic Tag?</h3>
            <p>The term Semantic means 'Meaningful'. Semantic tags are the meaningful tags in HTML. A semantic tag clearly describes its content to both browser and user. {'<div> and <span>'} are two examples of non-semantic tag, which don't describe anything about thier content. Where the semantic tags such as {'<form> , <table> , and <article>'} clearly defines thier content.</p>
        </div>
    );
};

export default SemanticTag;
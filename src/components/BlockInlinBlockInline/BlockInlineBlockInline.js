import React from 'react';

const BlockInlineBlockInline = () => {
    return (
        <div className='container py-8'>
            <h2 className='text-3xl text-center font-semibold'>Block, Inline-block, and Inline elements</h2>
            <h4 className='text-2xl my-5'>What is difference among Block, Inline-block, and Inline elements?</h4>
            <p>1. Block elements always start on a new line and takes up full width available</p>
            <p>2. Inline elements don't take place on a new line but take place beside each other. And don't takes up full width but take necessary height width based on the content. Also margin-padding don't work on inline element.</p>
            <p>3. Inline block element behaves like a block element but the difference is It takes up height width based on content like inline elements.</p>
        </div>
    );
};

export default BlockInlineBlockInline;
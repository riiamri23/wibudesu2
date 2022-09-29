import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <body className="transition-all">
            {children}
        </body>
    )
}

export default Background;
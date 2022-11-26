import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-green-500 rounded-full" role="status">
                <span class="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loading;
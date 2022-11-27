import React from 'react';
import loadingImg from '../../Access/loading-icon-vector.jpg'
const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-24  border-4 text-red-500 rounded-full" role="status">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={loadingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
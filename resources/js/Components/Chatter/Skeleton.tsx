import React from 'react';

type SkeletonProps = {
  type: 'avatar' | 'image' | 'input' | 'box' | 'line' | 'circle' | 'video';
  animated?: boolean;
  rounded?: boolean;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ type, animated = true, rounded = true, className }) => {
    const skeletonClass = `${className} ${animated?' animate-pulse':''} ${rounded?' rounded':''}`;

    const getSkeletonClass = () => {
        switch (type) {
            case 'avatar':
                return <div className={skeletonClass}>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#d1d5db" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                </div>;
            case 'circle':
                return <div className={`bg-gray-300 w-12 h-12 rounded-full ${skeletonClass}`}></div>;
            case 'image':
                return  <div className={skeletonClass}>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#d1d5db" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>;
            case 'video':
                return  <div className={skeletonClass}>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#d1d5db" viewBox="0 0 16 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                    </svg>
                </div>;
            case 'input':
                return <div className={`bg-gray-300 w-40 h-6 ${skeletonClass}`}></div>;
            case 'box':
                return <div className={`bg-gray-300 w-full h-16 ${skeletonClass}`}></div>;
            case 'line':
                return <div className={`bg-gray-300 w-full h-3 ${skeletonClass}`}></div>;
            default:
                return '';
        }
    };

  return getSkeletonClass();
};

export default Skeleton;

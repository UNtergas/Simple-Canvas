import React from 'react';

import { ColorPalette } from '@components/Colorpalette';
import { Tooltip } from '@components/Tooltip';


export const Frame: React.FC = () => {

    return (
        <div className='w-10/12 h-24 bg-[#C8BB9E] rounded-full flex justify-between items-center drop-shadow-lg fixed bottom-10'>
            <Tooltip />
            <ColorPalette />
        </div>
    );
};

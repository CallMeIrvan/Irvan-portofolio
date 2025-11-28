// components/Background.tsx
'use client';

import Aurora from './Aurora';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a192f]">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
        </div>
    );
};

export default Background;

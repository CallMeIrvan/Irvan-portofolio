// components/Background.tsx
'use client';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a192f]">
            {/* Orb 1: Teal/Blue - Top Left */}
            <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/20 blur-[100px] animate-blob" />

            {/* Orb 2: Purple/Pink - Top Right (User's request) */}
            <div className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#bd34fe]/10 blur-[120px] animate-blob animation-delay-2000" />

            {/* Orb 3: Teal - Bottom Left */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-teal-500/10 blur-[100px] animate-blob animation-delay-4000" />

            {/* Orb 4: Darker Navy - Center/Bottom Right for depth */}
            <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#112240]/50 blur-[80px] animate-blob" />
        </div>
    );
};

export default Background;

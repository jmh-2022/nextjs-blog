import Profile from '@/components/main/Hero';
// import Image from 'next/image';
// import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* 1. 프로필 영역 */}
            <Profile />
            {/* 2. 메인 posts 영역 */}
            <div>
                <h2>Featured Posts</h2>
                <div className="flex gap-2"></div>
            </div>
        </>
    );
}

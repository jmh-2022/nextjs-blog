import Image from 'next/image';
import React from 'react';

export type PostCardProps = {
    image?: string;
    createDate?: string;
    title?: string;
    content?: string;
    tag?: string;
};

export default function PostCard({ image, createDate, title, content, tag }: PostCardProps) {
    return (
        // 블로그 카드
        <div className="flex flex-col w-36 h-56 rounded shadow-md bg-white">
            {/* 이미지 영역 */}
            <Image src={'https://picsum.photos/200/300'} alt={'dummy image'} width={144} height={224} />
            {/* 블로그 카드 설명 영역 */}
            <div className="p-4 ">
                {/* 게시일 */}
                <p>2022-12-31</p>
                <div className="flex flex-col items-center">
                    {/* 제목 */}
                    <h2>2023년 리뷰</h2>
                    {/* 1줄 내용 */}
                    <p>2023년 한해 동안 배운 기술들, 생각들 정리</p>
                    {/* 태그 */}
                    <i className="bg-green-100 py-1 rounded-full">my story</i>
                </div>
            </div>
        </div>
    );
}

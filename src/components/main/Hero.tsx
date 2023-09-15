import Link from 'next/link';
import Image from 'next/image';
import profileImage from '../../../public/images/profile.jpeg';

export default function Hero() {
    return (
        <div className="flex flex-col items-center">
            <Image src={profileImage} alt={''} className="rounded-full" width={100} height={100} />
            <h2 className="text-lg font-bold">{'안녕하세요 장만호입니다.'}</h2>
            <p className="font-medium">Full-stack Engineer</p>
            <p>개인의 작은 능력도 가치가 되길 희망합니다.</p>
            {/* <p>개인의 작은 능력도 가치 있는 것으로 여기길 바랍니다.</p> */}
            <Link href={'/contact'} className="bg-yellow-300 py-1 px-3 rounded-full mt-4 font-semibold">
                Contact Me
            </Link>
        </div>
    );
}

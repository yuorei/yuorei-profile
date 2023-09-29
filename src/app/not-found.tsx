import Header from "@/app/components/Header"
import Image from 'next/image'
export default async function NotFound() {
    return (
        <div>
            <Header />
            <Image src="/home/404.png" alt="404" fill />
        </div>
    );
}
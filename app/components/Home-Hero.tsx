import Link from "next/link";
import RotatingText from "./RotatingText";

export default function HomeHero() {
    return (
        <section className="min-h-[100vh] flex gap-7 flex-col items-center justify-center px-6 text-center text-white">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="font-heading text-6xl font-bold">Hi! I'm Jayman Bernal</h1>
                <RotatingText />
            </div>
            <div className="flex items-center justify-center gap-5">
                <Link href="#experience" className="btn flex items-center justify-center relative">
                    <p className="font-heading uppercase">Experience</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="53" viewBox="0 0 176 53" fill="none">
                        <path d="M30.1258 51H26.5C12.969 51 2 40.031 2 26.5V26.5C2 12.969 12.969 2 26.5 2H149.5C163.031 2 174 12.969 174 26.5V26.5C174 40.031 163.031 51 149.5 51H57.7107" stroke="#5C7E8F" strokeWidth="2.5"/>
                    </svg>
                </Link>
                <Link href="mailto:jaymanbernal0@gmail.com" className="btn flex items-center justify-center relative">
                    <p className="font-heading uppercase">Resume</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="53" viewBox="0 0 176 53" fill="none">
                        <path d="M30.1258 51H26.5C12.969 51 2 40.031 2 26.5V26.5C2 12.969 12.969 2 26.5 2H149.5C163.031 2 174 12.969 174 26.5V26.5C174 40.031 163.031 51 149.5 51H57.7107" stroke="#FFFFFF" strokeWidth="2.5"/>
                    </svg>
                </Link>
            </div>
        </section>
    );
}
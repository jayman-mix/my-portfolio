import Link from "next/link";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 bg-brand ">
            <nav className="max-w-5x1 mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="font-heading font-bold uppercase text-4xl text-white ">
                    Jayman<span className="text-accent text-5xl ">.</span>
                </Link>
                <ul className="menu flex gap-6 font-heading uppercase text-lg">
                    <li>
                        <Link href="/about" className="hover:text-accent font-bold">About Me</Link>
                    </li>
                    <li>
                        <Link href="/#experience" className="hover:text-accent font-bold">Job Experience</Link>
                    </li>
                    <li>
                        <Link href="/#portfolio" className="hover:text-accent font-bold">My Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/#skills" className="hover:text-accent font-bold">My Skills</Link>
                    </li>
                </ul>
                <a href="mailto:jaymanbernal0@gmail.com" className="btn flex items-center justify-center relative">
                    <p className="font-heading uppercase">Contact Me</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="53" viewBox="0 0 176 53" fill="none">
                        <path d="M30.1258 51H26.5C12.969 51 2 40.031 2 26.5V26.5C2 12.969 12.969 2 26.5 2H149.5C163.031 2 174 12.969 174 26.5V26.5C174 40.031 163.031 51 149.5 51H57.7107" stroke="#5C7E8F" strokeWidth="2.5"/>
                    </svg>
                </a>
                
            </nav>
        </header>
    );
}
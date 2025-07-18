"use client";
import Link from "next/link";
import { usePathname} from "next/navigation";

export const Navigation = () =>{
    const pathname = usePathname();

    return(
        <nav>
        <Link href = "/" className="mr-4  text-blue-500">
        Home</Link>
        <Link href="/about" className="mr-4 text-blue-500">
        About</Link>
        <Link href="/blog" className="mr-4 text-blue-500">
        Blog</Link>
</nav>
    );

};
import Link from "next/link";

export default function FirstPost() {
    return <>
        <h1> First blog post</h1>;
        <Link href="/about">"This is About page"</Link>
    </>
}
// export default function Home(){
//     return(
//         <main className={styles.main}>
//             <h1>Events</h1>
//         </main>
//     )

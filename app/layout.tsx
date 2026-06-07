import './globals.css';
import Link from 'next/link';
export const metadata = { title: 'LearnXchange Graduation Demo', description: 'Educational platform MVP' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><nav className="nav"><Link href="/" className="logo">Learn<span>X</span>change</Link><div className="navlinks"><Link href="/courses">Courses</Link><Link href="/dashboard">Dashboard</Link><Link href="/teacher/create-lesson">Add Lesson</Link><span className="pill">Graduation Demo</span></div></nav>{children}<footer className="footer"><b>LearnXchange</b><span>Courses • Lessons • Video • PDF • Dashboard • API</span></footer></body></html>}

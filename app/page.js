import Image from "next/image";
import { redirect } from 'next/navigation';


export default  async function Home() {
  redirect('/api/auth/login?returnTo=/dashboard');
  return (
    
    <main className="">
        <h1>Hi!</h1>
        <a href="/api/auth/login">Login</a>
    </main>
  );
}

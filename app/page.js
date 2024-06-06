import Image from "next/image";
import { redirect } from 'next/navigation';


export default  async function Home() {
  redirect('/api/auth/login')
  return (
    
    <main className="">
        <h1>Hi!</h1>
    </main>
  );
}

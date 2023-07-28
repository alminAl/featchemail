import GmailEmail from "@/components/GmailEmail";
import { useSession } from "next-auth/react";



export default function Home() {
  const { data: session, status } = useSession({ required: true });
  // console.log(session)

  return (
    <main
      className={`flex flex-col items-center justify-between p-24`}
    >
      <p>Gmail</p>
      {session ? <GmailEmail /> : <p>hello</p>}
    </main>
  );
}

import {SignedIn, SignedOut} from "@clerk/nextjs";
import {Images} from "@/app/_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  return (
    <main>
        <SignedOut>
            <div className='w-full h-full text-2xl text-center' >
                Please sign in to view this page
            </div>
        </SignedOut>
        <SignedIn>
            <Images />
        </SignedIn>
    </main>
  );
}

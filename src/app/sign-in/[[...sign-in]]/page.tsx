import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#1A1C1D] shadow shadow-white'>
        <SignIn />
    </div>
  );
}
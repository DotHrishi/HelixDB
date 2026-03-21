import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-black text-gray-300 min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 flex items-center justify-center'>
        <p className='text-lg'>
          Welcome to HelixDB
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default page
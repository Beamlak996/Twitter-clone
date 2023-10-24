"use client"
import { useLoginModal } from "@/hooks/useLoginModal"
import { useRouter } from "next/navigation"
import { FaFeather } from "react-icons/fa"

const SidebarTweetButton = () => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const onClick = () => {
    loginModal.onOpen()
  }

  return (
    <div onClick={onClick}>
      {/* Small Screen */}
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      {/* Large Screen */}
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 transition cursor-pointer">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]" >
            Tweet
        </p>
      </div>
    </div>
  );
}

export default SidebarTweetButton
"use client"
import { useRouter } from "next/navigation"

const Page = () => {

    const router = useRouter()

  return (
    <div className="flex h-[700px] w-full">

  {/* Image side (bigger) */}
  <div className="hidden md:flex flex-[1.5]">
    <img
      className="h-full w-full object-cover"
      src="./login.jpg"
      alt="leftSideImage"
    />
  </div>

      <div className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-black transition-colors">

        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-red-500 font-bold">Sign in</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 transition-colors">
            Welcome back! Please sign in to continue
          </p>

          <button
            type="button"
            className="w-full mt-8 bg-gray-100 dark:bg-gray-500/10 flex items-center justify-center h-12 rounded-full border border-gray-200 dark:border-blue-600 hover:bg-gray-200 dark:hover:bg-gray-500/30 transition-colors"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-200 dark:bg-blue-600"></div>
            <p className="w-full text-nowrap text-sm text-gray-600 dark:text-gray-400 transition-colors">
              or sign in with email
            </p>
            <div className="w-full h-px bg-gray-200 dark:bg-blue-600"></div>
          </div>

          <div className="flex items-center w-full border border-gray-200 dark:border-white/10 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-colors">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full border border-gray-200 dark:border-white/10 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-colors">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-600 dark:text-gray-400 transition-colors">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full font-bold text-white bg-red-500 hover:opacity-70 transition-opacity"
            onClick={() => router.push("/")}
          >
            Login
          </button>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 transition-colors">
            Don’t have an account?{" "}
            <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">
              Sign up
            </a>
          </p>
        </form>

      </div>
    </div>
  )
}

export default Page
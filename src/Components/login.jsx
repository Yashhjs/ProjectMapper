export default function LoginPage() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-700">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex">
                    {/* <!-- Left Image Section --> */}
                    <div className="hidden md:block w-2/3 bg-gradient-to-t from-purple-700 to-indigo-600 p-8 text-white">
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                {/* <!-- Image Section --> */}
                                <img src="https://i.pinimg.com/564x/84/ca/87/84ca87e5be199c22c3f1a6d5e32ce57a.jpg" alt="Night illustration" className="w-3/4 mx-auto mb-4 rounded-full"/>
                                    <p className="text-xl">Login your Account to get full User Experience</p>
                                    <p className="mt-4 text-sm">Tip: Upgrade your Account to get access to Premium features</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Right Form Section --> */}
                    <div className="w-full md:w-1/3 p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Hello!<br/>Good Morning</h2>
                        <form>
                            {/* <!-- Username --> */}
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input type="text" id="username" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                            </div>
                            {/* <!-- Password --> */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="password" id="password" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                            </div>
                            {/* <!-- Forgot Password --> */}
                            <div className="flex justify-between items-center mb-6">
                                <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot password?</a>
                            </div>
                            {/* <!-- Login Button --> */}
                            <div>
                                <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">Login</button>
                            </div>
                            {/* <!-- Create Account Link --> */}
                            <p className="mt-4 text-sm text-gray-500 text-center">Don&apos;t have an account? <a href="/signup" className="text-indigo-500 hover:underline">Create Account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
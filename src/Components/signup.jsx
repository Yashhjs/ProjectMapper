export default function signup(){
    return (
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
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create an Account</h2>
                    <form>
                        {/* <!-- First Name --> */}
                        <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input type="text" id="firstName" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                        </div>
                        
                        {/* <!-- Last Name --> */}
                        <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input type="text" id="lastName" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                        </div>
                        
                        {/* <!-- Email --> */}
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                        </div>
                        
                        {/* <!-- Password --> */}
                        <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                        </div>
                        
                        {/* <!-- Confirm Password --> */}
                        <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
                        </div>
                        
                        {/* <!-- Sign Up Button --> */}
                        <div>
                        <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">
                            Sign Up
                        </button>
                        </div>
                        
                        {/* <!-- Login Link --> */}
                        <p className="mt-4 text-sm text-gray-500 text-center">
                        Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Login</a>
                        </p>
                    </form>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
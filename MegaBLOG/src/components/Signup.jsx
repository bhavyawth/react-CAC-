import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const currentUser = await authService.getCurrentUser()
                if (currentUser) {
                    dispatch(login(currentUser))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
            <div className="w-full max-w-lg bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
                <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-base text-gray-500 mb-6">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && (
                    <p className="text-red-600 mb-4 text-center text-sm font-medium">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit(create)} className="space-y-5">
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be valid",
                            },
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Create a secure password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type="submit" className="w-full text-lg font-semibold py-2 rounded-xl">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Signup

import React, { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../api'
import { RegisterRoute } from '../util/router/routes'
import { InputField, LoadingButton } from '../components/'

export default function Login() {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/')
		}
	})

	const onLogin = (event) => {
		setIsLoading(true)
		event.preventDefault()
		const { email, password } = event.target

		postLogin({
			email: email.value,
			password: password.value,
		})
			.then((res) => {
				setIsLoading(false)
				if (res.data.response.token) {
					const { token, role, first_name, last_name } = res.data.response
					localStorage.setItem('token', token)
					localStorage.setItem('role', role)
					localStorage.setItem('first_name', first_name)
					localStorage.setItem('last_name', last_name)
					navigate('/')
				}
			})
			.catch((err) => {
				setIsLoading(false)
				setError(err.response.data?.message ?? 'Something went wrong')
			})
	}

	return (
		<div className="bg-orange overflow-hidden">
			<div className="h-screen px-[20vw] flex flex-col gap-8 justify-center items-center overflow-auto p-8">
				<div className="p-4 w-full bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
					<img src="RIT_rgb_hor_k.png" width={500} />
					<h1 className="font-bold text-2xl">Cage Inventory</h1>
				</div>
				<form
					className="w-full p-10 bg-white rounded flex gap-5 justify-center items-center flex-col shadow-lg z-10"
					onSubmit={onLogin}
				>
					<h3 className="font-bold text-2xl">Login</h3>

					<div className="w-80 max-w-full flex flex-col gap-5">
						<InputField type="email" name="email" label="Email" />
						<InputField
							type="password"
							name="password"
							label="Password"
						/>
					</div>

					{error && <p className="text-red-500">{error}</p>}
					<LoadingButton isLoading={isLoading} text={'Login'} />

					<a
						href="/"
						className="text-sm text-gray-400 hover:text-green-600"
					>
						Forgot password?
					</a>
				</form>
				<div className="p-4 w-full bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
					<p>
						New to Cage Inventory?
						<a
							href={RegisterRoute.path}
							className="text-lg text-green-500 hover:text-green-300 ml-5"
						>
							Register
						</a>
					</p>
				</div>
			</div>
			<div className="absolute top-24 -left-80">
				<img src="tigerLogo.png" width="1000" />
			</div>
		</div>
	)
}

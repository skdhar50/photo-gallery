import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/images/login.png";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Input from "../components/form/Input";
import { useLoginMutation } from "../features/auth/authApi";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const [login, { data, isLoading, isError, error: responseError }] =
		useLoginMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (responseError?.data) {
			setError(responseError.data);
		}
		if (data?.accessToken && data?.user) {
			setEmail("");
			setPassword("");
			navigate("/home");
		}
	}, [data, responseError, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setError("");
		login({
			email,
			password,
		});
	};

	return (
		<div className="flex h-screen justify-center items-center px-4">
			<div className="bg-gray-50 w-full md:w-fit p-8 rounded flex items-center justify-center gap-4 drop-shadow-xl border">
				<div className="flex flex-col items-center space-y-6 md:border-r md:border-gray-300 md:pr-6">
					<div className="">
						<p className="text-2xl font-semibold text-[#056AA3]">Welcome</p>
					</div>
					<div className="flex flex-col items-center space-y-8">
						<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
							<Input
								type="email"
								required={true}
								name="email"
								changeHandler={setEmail}
								placeholder="Enter your email"
							/>
							<div className="">
								<Input
									type="password"
									required={true}
									name="password"
									changeHandler={setPassword}
									placeholder="Enter your password"
								/>

								<p className="italic text-gray-500 text-sm text-end pt-2 cursor-pointer hover:text-gray-700 pr-1">
									Forget Password?
								</p>
							</div>

							<PrimaryButton title="Sign in" disabled={isLoading} />
							{isError && (
								<div className="text-sm text-rose-600 text-center bg-rose-100 py-1 rounded">
									{error}
								</div>
							)}
						</form>

						<div className="text-sm text-gray-600 italic">
							<p className="">
								Don't have an Account?{" "}
								<Link to="/register">
									<span className="pl-2 underline text-[#056AA3] cursor-pointer hover:text-opacity-70">
										Register Now
									</span>
								</Link>
							</p>
						</div>
					</div>
				</div>

				<div className="hidden md:block">
					<img
						src={LoginImage}
						alt=""
						className="h-[220px] lg:h-[250px] w-[220px] lg:w-[250px] shrink-0 object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;

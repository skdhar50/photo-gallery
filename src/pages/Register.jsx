import PrimaryButton from "../components/buttons/PrimaryButton";
import Input from "../components/form/Input";
import RegisterImage from "../assets/images/register.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const [register, { data, isLoading, error: responseError }] =
		useRegisterMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (responseError?.data) {
			setError(responseError.data);
		}
		if (data?.accessToken && data?.user) {
			navigate("/home");
		}
	}, [data, navigate, responseError]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setError("");
		if (confirmPassword !== password) {
			setError("Password not matched");
		} else {
			register({
				name,
				email,
				password,
				image: `https://randomuser.me/api/portraits/med/men/${
					Math.floor(Math.random() * 90) + 1
				}.jpg`,
			});
		}
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
								type="text"
								required={true}
								name="username"
								changeHandler={setName}
								placeholder="Enter your username"
							/>
							<Input
								type="email"
								required={true}
								name="email"
								changeHandler={setEmail}
								placeholder="Enter your email"
							/>
							<Input
								type="password"
								required={true}
								name="password"
								changeHandler={setPassword}
								placeholder="Enter your password"
							/>
							<Input
								type="password"
								required={true}
								name="confirm_password"
								changeHandler={setConfirmPassword}
								placeholder="Confirm your password"
							/>

							<PrimaryButton title="Sign up" disabled={isLoading} />

							{error?.length > 0 && (
								<div className="text-sm text-rose-600 text-center bg-rose-100 py-1 rounded">
									{error}
								</div>
							)}
						</form>

						<div className="text-sm text-gray-600 italic">
							<p className="">
								Already have an Account?
								<Link to="/">
									<span className="pl-2 underline text-[#056AA3] cursor-pointer hover:text-opacity-70">
										Login Now
									</span>
								</Link>
							</p>
						</div>
					</div>
				</div>

				<div className="hidden md:block">
					<img
						src={RegisterImage}
						alt=""
						className="h-[220px] lg:h-[250px] w-[220px] lg:w-[250px] shrink-0 object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Register;

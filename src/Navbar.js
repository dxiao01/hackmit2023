import React from "react";

const Navbar = () => {
	return (
		<nav class="bg-green-400 fixed w-full">
			<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div class="relative flex items-center justify-between h-16">
					<div class="absolute inset-y-0 right-0 flex items-center pr-2 text-white">
						<a
							href="#posture"
							class="hover:bg-black  text-white px-3 py-2 rounded-md font-large text-lg"
						>

						</a>

						<a
							href="#carpal"
							class="hover:bg-black  text-white px-3 py-2 rounded-md text-lg font-medium"
						>

						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

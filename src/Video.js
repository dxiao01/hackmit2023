import React from "react";
import Chart from "./Chart";


function PostureVideo({ videoRef, result }) {


	return (
		<div class="container mx-auto flex items-center justify-center">
			<video
				class="mr-20"
				ref={videoRef}
				style={{ transform: "scale(-1, 1)" }}
				width="500"
				height="300"
			/>
			<div>
				{result.length > 0 && (
					<div>
						<Chart data={result[0]} />
					</div>
				)}
			</div>
		</div>
	);
}

export default PostureVideo;

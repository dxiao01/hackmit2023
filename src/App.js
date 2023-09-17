import Video from "./Video";
import Info from "./Info";
import "./App.css";
import ml5 from "ml5";
import React, { useEffect, useRef, useState } from "react";

import useInterval from "@use-it/interval";

let classifier;

function App() {
	const videoRef = useRef();
	const [result, setResult] = useState([]);

	useEffect(() => {
		classifier = ml5.imageClassifier("./tm-my-image-model/model.json", () => {
			navigator.mediaDevices
				.getUserMedia({ video: true, audio: false })
				.then((stream) => {
					videoRef.current.srcObject = stream;
					videoRef.current.play();
				});
		});
	}, []);

	useInterval(() => {
		if (classifier) {
			classifier.classify(videoRef.current, (error, results) => {
				if (error) {
					console.error(error);
					return;
				}

				setResult(results);
			});
		}
	}, 500);

	return (
		<div className={"min-h-screen flex flex-col text-black " + (result.length > 0 && (result[0].label == "No Falling Motion Detected") ? "bg-green-500" : "bg-red-500")}>
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
					Welcome to
				</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
					Guardian Angel
				</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-20">
					Guardian Angel is the an open-source application designed to save lives by detecting falls. By automating the process, we hope to save lives and improve the well-being of people everywhere.
				</p>
				<Video result={result} videoRef={videoRef} />
			</main>
			<Info />
		</div>
	);
}

export default App;

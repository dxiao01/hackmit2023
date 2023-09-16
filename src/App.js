import Video from "./Video";
import Info from "./Info";
import "./App.css";

function App() {
	return (
		<div className="min-h-screen flex flex-col text-black bg-green-400">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
					Welcome to
				</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
					Guardian Angel
				</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-20">
					Guardian Angel is the world's first open-source application designed to save lives by detecting falls. By automating the process, we hope to save lives and improve the well-being of people everywhere.
				</p>
				<Video />
			</main>
			<Info />
		</div>
	);
}

export default App;

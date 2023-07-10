import React from "react";
import emojipedias from "./emojipedia";
import Entry from "./components/Entry";

const emoji = (emojipedia, index) => {
	return (
		<Entry
			key={index}
			emoji={emojipedia.emoji}
			name={emojipedia.name}
			meaning={emojipedia.meaning}
		/>
	);
};

const App = () => {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>
			<dl className="dictionary">{emojipedias.map(emoji)}</dl>
		</div>
	);
};

export default App;

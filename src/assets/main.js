//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzarj-aG543UGayHbQ3L7OA&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '70af25d99cmsh68d711ae422d92bp175187jsnc971f427314a',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

(async () => {

	try {
		const response = await fetch(url, options);

		const data = await response.json();
		

		let view = `
		${data.items.map(item => `
			<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${item.snippet.title}
					</h3>
				</div>
				</div>
			
			
			`)}
			
		`;
		content.innerHTML = view;


		/*
	data.items.map(item => {
		console.log(item.snippet.title);
		
	})*/


	} catch (error) {
		console.error(error);
	}

})();


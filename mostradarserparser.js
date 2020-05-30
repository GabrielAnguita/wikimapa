
			const domParser = new DOMParser();

			

			var el = fetch("https://www.elmostrador.cl/").then(res => domParser.parseFromString(res.parse.text['*'], 'text/html'));
/*
			function queryApi(query) {
				  const url = new URL(endpoint);
				  const params = { format: 'json', origin: '*', ...query };
				  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
				  return fetch(url).then(response => response.json());
				}

			function getPageHtml(pageName) {
				  return queryApi({ action: 'parse', page: pageName, prop: 'text', section: 0, redirects: 1 })
				    .then(res => domParser.parseFromString(res.parse.text['*'], 'text/html'));
				}

*/
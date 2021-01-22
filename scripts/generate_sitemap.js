const globby = require( 'globby' );
const { SitemapStream, streamToPromise } = require( 'sitemap' )
const { Readable } = require( 'stream' )
const fs = require( 'fs' );

/// Website Constants
/*  | */ const DOMAIN = "https://antonyjr.in/";               /* | */
/*  | */ const BLOG_BASE_URL = "/blog/post/";                 /* | */
/*  | */ const INDEX_PAGE = "/index.html";                    /* | */
//  -------------------------------------------------------------- //

console.log("Sitemap Generator v0.0.1, Make XML Sitemap.");
console.log("Copyright (C) 2021, Antony J.R <antonyjr@pm.me");
console.log('');
console.log("Domain: ", DOMAIN);
console.log("Generating links... ");

const blog_globs = globby(['posts/*md']);
blog_globs.then((paths) => {
	/// Add the index page to the sitemap first.
	var links = [{
		img: DOMAIN + 'ajr_logo.png',
		url: INDEX_PAGE,
		changefreq: 'daily',
		priority: 0.8
	},
	{
		img: DOMAIN + 'ajr_logo.png',
		url: DOMAIN + 'blog',
		changefreq: 'daily',
		priority: 0.5
	},
	{
		img: DOMAIN + 'ajr_logo.png',
		url: DOMAIN + 'projects',
		changefreq: 'daily',
		priority: 0.5
	}];

	for(var i = 0; i < paths.length ; ++i) {
		const post = paths[i].replace('posts/', '').replace('.md','.html');
		const image = post.replace('.html', '.png');
		links.push({
			img: DOMAIN + image,
			url: BLOG_BASE_URL + post,
			changefreq: 'daily',
			priority: 0.3
		});
	}

	console.log(links);

	const stream = new SitemapStream({
		hostname: DOMAIN
	});

	console.log("Writing to file: ./out/sitemap.xml ....");
	streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
		const content = data.toString();
		fs.writeFile('./out/sitemap.xml', content, err => {
			if(err) {
				console.log("ERROR: cannot write file. Please make sure you have called yarn export.");
				console.log("ERROR: Also make sure you are in repo root and run yarn sitemap after yarn export.");
				return;
			}

			console.log("Sitemap Generated.");
		});
	});
});

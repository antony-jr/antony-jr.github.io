import { globby } from "globby";

import matter from "gray-matter";

import { SitemapStream, streamToPromise } from "sitemap";
import  { Readable } from "stream";
import fs from "fs";

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

const blog_globs = globby(['posts/*/*.md']);
blog_globs.then((paths) => {
	/// Add the index page to the sitemap first.
	var links = [{
		img: DOMAIN + 'ajr_logo.png',
		url: INDEX_PAGE,
		changefreq: 'daily',
		priority: 1
	},
	{
		img: DOMAIN + 'ajr_logo.png',
		url: DOMAIN + 'blog',
		changefreq: 'daily',
		priority: 1
	},
	{
		img: DOMAIN + 'ajr_logo.png',
		url: DOMAIN + 'projects',
		changefreq: 'daily',
		priority: 1
	}];

	for(var i = 0; i < paths.length ; ++i) {
	        const md_path = paths[i];
		const post = paths[i].replace('posts/', '').replace('.md','').replace('/', '-');

	   	var priority = 0.3;
		var image = "ajr_logo.png";
		const doc = matter(fs.readFileSync(md_path, 'utf8'));
		if(typeof doc.data.image == "string") {
		   image = doc.data.image
		}
	   	if(typeof doc.data.priority == "number") {
		   priority = doc.data.priority;
		}

	   	if(image[0] == '/') {
		   image = image.slice(1, image.length);
		}

		links.push({
			img: DOMAIN + image,
			url: BLOG_BASE_URL + post,
			changefreq: 'daily',
			priority: priority
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

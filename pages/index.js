import React from 'react';
import styled from 'styled-components';

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Swing from 'react-reveal/Swing';
import Zoom from 'react-reveal/Zoom';

import Typography from '../components/Typography.js';
import AnimatedProfile from '../components/AnimatedProfile.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { SocialIcon } from 'react-social-icons';

const SIcon = styled(SocialIcon)`
	margin: 10px;
`;

const WrapperCol = styled(Col)`
	height: 400px;

	@media (max-width: 600px) {
		height: 500px;
	}

	@media (max-width: 375px) {
		height: 350px;
	}

	@media (max-width: 330px) {
		height: 300px;
	}

	@media (max-width: 280px) {
		height: 250px;
	}
`;

function BlogCard(props) {
	const [hover, setHover] = React.useState(false);

	return (
	<Card
	  onClick={() => {window.location.href=props.url}}
	  onMouseEnter={()=> { setHover(true)}}
	  onMouseLeave={()=> { setHover(false)}}
		style={{margin: '10px', cursor: 'pointer', transition: 'all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95)'}}
		bg={props.dark ? (hover ? "primary" : "dark") : (hover ? "primary" : "")} text={props.dark ? "white" : "black"}
		className={"text-center p-" + (typeof props.cardSize != 'undefined' ? props.cardSize : '2')}>
		{props.image && <Card.Img variant="top" src={props.image}/>}
	
		<blockquote className="blockquote mb-0 card-body">
	    <Card.Title>
		    <Typography type={props.titleSize}>
			    {props.title}
		    </Typography>   
		    {props.badge && <Badge pill variant={props.dark ? "light" : "dark"}>
			{props.badge}
		    </Badge>}{' '}	
	    </Card.Title>
	    <Typography type='p'>
		    {props.description}
	    </Typography>
	
      <footer className="blockquote-footer">
        <small className="text-muted">
		<Typography type='h6'>
		{props.author}
		</Typography>
	</small>
      </footer>
   </blockquote>
	  <Card.Footer>
		  <small>
		<Typography type='h6'>
			<b>{props.date}</b>
		</Typography>
		</small>
	  </Card.Footer>
  </Card>
	
	);
}

function Index(props) {
	return (
		<React.Fragment>
			<Container style={{marginTop: '40px',}} fluid='lg'>
		
				<Zoom>
				<Row style={{justifyContent: 'center', flexWrap: 'wrap-reverse'}}>
					
					<WrapperCol> 
					
			<AnimatedProfile
				object1='/triangle.png'
				object2='/triangle_inverted_white.png'
				src='/me_rgb.png'/>
	
					</WrapperCol>
	
					<Col sm={8}>
			<Typography 
				type='h2'font='Dosis Bold'>
				<b>Hi., I'm Antony.</b>
			</Typography>
			<Typography
				type='h3'>
				I'm an <b>Open Source Developer</b> and <b>Aspiring Computer Scientist</b>.

				<br />	
			</Typography>
			<Typography
				type='p'>
			<ReactMarkdown source={props.site.about} />
			</Typography>

				<div>
					<SIcon bgColor='black' url="https://twitter.com/antonyjr0"/>	
					<SIcon bgColor='black' url="https://www.youtube.com/channel/UCdcXDHx3gvC0Q9TuOOb7YRw"/>
					<SIcon bgColor='black' url="https://github.com/antony-jr"/>
					<SIcon bgColor='black' url="mailto:antonyjr@protonmail.com"/>
				</div>
	
			
				</Col>

				</Row>
				</Zoom>

				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<Col style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
					<Zoom>
						<br/>
						<br/>
					<Image
					src="/updates_title.png" fluid/>
					</Zoom>
					<br/ >

					<br/>
					</Col>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<CardColumns>
						{props.posts.map((key, index) =>
						<Fade key={index}>
						<BlogCard 
							dark={key.dark}
							title={key.title}
							description={key.description}
							date={key.date}
							author={key.author}
							badge={key.badge}
							titleSize="h3"
							cardSize={key.cardSize}
						/>
						</Fade>)
						}
					</CardColumns>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<Col style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
					<Zoom>
						<br/>
						<br/>
						<Image
					src="/pubkeys_title.png" fluid/>
					
					</Zoom>
					<br />
					<br />
					</Col>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<Col style={{minWidth: '200px'}}>
						<Fade>
						<Typography type='p'>
							This is my <b>primary key</b>, please follow this site to know if I change
							my key which will not be that often. <br/>
							You can encrypt sensitive data that you want to sent to me via email.
							I also will be using this key to sign all my data files.
							If you want encrypted response then you must send your GPG public key first.

						</Typography>
						</Fade>
					</Col>
					<Col >
						<Fade>
						<pre style={{overflowY: 'hidden', overflowX: 'auto', backgroundColor: 'black', color: 'green', padding: '10px'}}>
						{'pub   rsa4096/3156C8D324D12E73 2020-07-21 [SC]\n' +
						 '      54AFD2B538FF0107631D72AE3156C8D324D12E73\n' +
						 'uid                 [ultimate] J.R. Divya Antony <antonyjr@protonmail.com>\n' +
						 'sub   rsa4096/0AF1A22AF304CE37 2020-07-21 [E]\n'}
						</pre>
						</Fade>
					</Col>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center', paddingBottom: '100px',}}>
					<Zoom>
					<Typography type='h4' font='Dosis Bold'>
						<a href='/gpg.asc' style={{color: 'black'}} download>
						Get GPG Public Key
						</a>
					</Typography>
					</Zoom>
				</Row>
			</Container>
		</React.Fragment>
	);
}


export async function getStaticProps() {
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
	      ...document.data,
	      slug
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  const site = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
	      frontmatter: document.data,
	      markdownBody: document.content,
	      slug
      }
    })
    return data
  })(require.context('../site', true, /\.md$/))



  function validFile(entry) {
	  	var slugName = entry.slug;
		var r = slugName.split('-');
	  	if(r.length < 3) {
			return false;
		}

	  	// Check if it's a valid ISO Date.
		var year = Number(r[0]),
		    month = Number(r[1]),
		    day = Number(r[2]);

		if(day > 31 || month > 12) {
			return false;
		}

		return true;
  }
 
  function getDate(entry) {
	  var slugName = entry.slug;
	  var r = slugName.split('-');
	  if(r.length < 3) {
			return new Date("Invalid");
	  }
	  var year = Number(r[0]),
	      month = Number(r[1]),
	      day = Number(r[2]);
	  return new Date(year + '-' + month + '-' + day);
  }

  var workingPosts = posts.filter(validFile);
  workingPosts.sort(function(a,b) {
	const bd = new Date(b.slug);
	const ad = new Date(a.slug);
	return bd - ad;
  });
  

  var updates = workingPosts.slice(0, 8); // Take up first 8 entries
  for(let n = 0; n < updates.length; ++n) {
	  var cardSize = 5 - n;
	  if(cardSize < 2) {
		  cardSize = 2;
	  }
	  updates[n].cardSize = cardSize.toString();
	  updates[n].dark = Math.random() >= 0.5;
	  updates[n].date = getDate(updates[n]).toDateString();
  }

  var about = null;
  for(let n = 0; n < site.length; ++n) {
	  if(site[n].slug == 'about') {
		  about = site[n].markdownBody;
		  break;
	  }

	  // More details will be added later
  }

  return {
    props: {
      posts: updates,
      site: {
	 about: about,
      }
    },
  }
}


export default Index;

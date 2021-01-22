import React from "react";
import styled from "styled-components";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Media from "react-bootstrap/Media";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";

import Typography from "../../components/Typography.js";
import FadeTop from "../../components/FadeTop.js";
import FadeBottom from "../../components/FadeBottom.js";

import { BsTag } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const DateDiv = styled.div`
  font: bold 1rem "Dosis Bold";
  font-weight: 700px;
  margin: 10px;
  color: white;

  @media (max-width: 331px) {
    font: bold 0.5rem "Dosis Bold";
  }

  @media (max-width: 191px) {
    font: bold 0.2rem "Dosis Bold";
  }
`;

const TitleDiv = styled.div`
  cursor: pointer;
  font: bold 1.1rem "Dosis Regular";
  max-width: 400px;

  @media (max-width: 331px) {
    font: bold 0.8rem "Dosis Regular";
  }

  @media (max-width: 191px) {
    font: bold 0.5rem "Dosis Regular";
  }
`;

function Blog(props) {
  var pageItems = [];

  const [pageNumber, setPageNumber] = React.useState(1);

  const handlePageClick = (event) => {
    const pageRequested = Number(event.target.innerText);
    setPageNumber(pageRequested);
  };

  for (let n = 1; n <= props.pages; n++) {
    pageItems.push(
      <Pagination.Item
        disabled={n == pageNumber}
        onClick={handlePageClick}
        key={n}
        active={n == pageNumber}
      >
        {n}
      </Pagination.Item>
    );
  }

  return (
    <React.Fragment>
      <FadeTop />
      <div style={{ backgroundColor: "white", width: "100%" }}>
        <div
          style={{
            height: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Pagination>{pageItems}</Pagination>

          <table style={{ display: "table", padding: "20px" }}>
            <tbody>
              {props.posts[pageNumber - 1].map((key, index) => (
                <tr key={index}>
                  <td style={{ padding: "20px" }}>
                    <div style={{ background: "black" }}>
                      <DateDiv>{key.slug}</DateDiv>
                    </div>
                  </td>

                  <td style={{ paddingRight: "10px", width: "400px" }}>
                    <TitleDiv
                      onClick={() => {
                        window.location.href = "/blog/post/" + key.slug;
                      }}
                    >
                      {key.title}
                    </TitleDiv>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div style={{ margin: "10px" }}>
                        {key.tag && (
                          <Typography type="p" color="rgba(158,158,158 ,1)">
                            <BsTag />
                            {" " + key.tag + " "}
                          </Typography>
                        )}
                      </div>
                      <div style={{ margin: "10px" }}>
                        {key.read && (
                          <Typography type="p" color="rgba(158,158,158 ,1)">
                            <BsFillClockFill style={{ verticalAlign: "sub" }} />
                            {" " + key.read + " min read"}
                          </Typography>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FadeBottom />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  //get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        ...document.data,
        slug,
      };
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  function validFile(entry) {
    var slugName = entry.slug;
    var r = slugName.split("-");
    if (r.length != 3) {
      return false;
    }

    // Check if it's a valid ISO Date.
    var year = Number(r[0]),
      month = Number(r[1]),
      day = Number(r[2]);

    if (day > 31 || month > 12) {
      return false;
    }

    return true;
  }

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  var r = [];
  var workingPosts = posts.filter(validFile);
  workingPosts.sort(function (a, b) {
    const bd = new Date(b.slug);
    const ad = new Date(a.slug);
    return bd - ad;
  });

  const page_size = 6; /// Set the page size here.

  var total_pages = posts.length / page_size;
  /// Check if the total pages has a decimal part if it does then just add 1
  /// Note: We can't use ceil or floor here because the decimal part means we just
  ///       need an extra page. 

  if(total_pages % 1 != 0) {
	  total_pages += 1;
  }
  total_pages = Math.trunc(Number(total_pages));

  for (let n = 1; n <= total_pages; n++) {
    r.push(paginate(workingPosts, page_size, n));
  }

  return {
    props: {
      pages: total_pages,
      posts: r,
    },
  };
}
export default Blog;

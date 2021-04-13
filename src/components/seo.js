import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ menuName }) => {
  const { pathname } = useLocation();
  const { site, imgData } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    menuLinks,
    // defaultImage,
    // twitterUsername,
  } = site.siteMetadata;

  const defaultImage = imgData.childImageSharp.fluid.src;

  const title = menuName ? menuLinks[menuName].title : "";
  const description = menuName ? menuLinks[menuName].description : "";
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "ko",
      }}
    >
      <meta
        name="google-site-verification"
        content="2aJn7xMkp9QcdYbmlyDErwbQ56DD-G8bjMoZCuUaC1I"
      />
      <meta
        name="google-site-verification"
        content="VtIr8dxR8sN9b8mqalCS8fgCRdjiQoYaBKNGjY47JRQ"
      />
      <meta
        name="naver-site-verification"
        content="059da54e39a47f13b7cc70270b475384ff5ca741"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      <meta property="og:type" content="article" />

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  menuName: PropTypes.string,
};

SEO.defaultProps = {
  menuName: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        menuLinks {
          about {
            title
            description
          }
          browse {
            title
            description
          }
          contact {
            title
            description
          }
          home {
            title
            description
          }
          visit {
            title
            description
          }
        }
      }
    }
    imgData: file(relativePath: { eq: "how-they-make.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

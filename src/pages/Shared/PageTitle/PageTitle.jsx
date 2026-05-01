import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | HomeFinder`;
  }, [title]);

  return (
    <Helmet>
      <title>{title} | HomeFinder</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;

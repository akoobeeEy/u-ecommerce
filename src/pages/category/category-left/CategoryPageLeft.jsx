import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

import theme from "theme";
import "./CategoryPageLeft.scss";

const CategoryPageLeft = ({
  category,
  setSelectedCategoryId,
  selectedCategoryId,
}) => {
  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedCategoryId(subcategoryId);
  };

  return (
    <div>
      <Box fontFamily={theme.fonts.fSf} className="category-page_breadcrumb">
        <Box fontFamily={theme.fonts.fSf}>
          {category && (
            <h1 className="category-page_title">{category.name_ru}</h1>
          )}
        </Box>
        <Box>
          {category &&
            category.subcategories &&
            category.subcategories.map((subcategory) => (
              <Box key={subcategory.id}>
                <NavLink
                  onClick={() => handleSubcategoryClick(subcategory.id)}
                  className={`ctPage-subcategory_title ${selectedCategoryId === subcategory.id ? 'selected' : ''}`}
                >
                  {subcategory.name_ru}
                </NavLink>
              </Box>
            ))}
        </Box>
      </Box>
    </div>
  );
};

CategoryPageLeft.propTypes = {
  category: PropTypes.object,
  setSelectedCategoryId: PropTypes.func,
  selectedCategoryId: PropTypes.string,
};

export default CategoryPageLeft;

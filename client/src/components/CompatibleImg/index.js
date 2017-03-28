import React, { PropTypes } from 'react';

const CompatibleImg = ({ imgName, fallback = 'png', ...props }) => {
    return (
        <picture>
            <source srcSet={ require(`../../assets/${imgName}.webp`) }
                type="image/webp"
                alt={ imgName }
                { ...props }
            />
            <source srcSet={ require(`../../assets/${imgName}.${fallback}`) }
                type={`image/${fallback}`}
                alt={ imgName }
                { ...props }
            />
            <img src={ require(`../../assets/${imgName}.${fallback}`) }
              alt={ imgName }
                { ...props }
            />
        </picture>
    );
};

CompatibleImg.propTypes = {
    imgName: PropTypes.string.isRequired,
    fallback: PropTypes.string
};

export default CompatibleImg;

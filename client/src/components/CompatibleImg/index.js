import React, { PropTypes } from 'react';

const CompatibleImg = ({ imgName, fallback = 'png', ...props }) => {
    return (
        <picture>
            <source srcSet={ require(`../../assets/${imgName}.webp`) }
                type="image/webp"
                role="presentation"
                { ...props }
            />
            <source srcSet={ require(`../../assets/${imgName}.${fallback}`) }
                type={`image/${fallback}`}
                role="presentation"
                { ...props }
            />
            <img src={ require(`../../assets/${imgName}.${fallback}`) }
                role="presentation"
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

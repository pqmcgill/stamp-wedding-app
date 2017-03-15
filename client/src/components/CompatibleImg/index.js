import React, { PropTypes } from 'react';

const CompatibleImg = ({ imgName, fallback = 'png' }) => {
    return (
        <picture>
            <source srcSet={ require(`../../assets/${imgName}.webp`) }
                type="image/webp"
                role="presentation"
            />
            <source srcSet={ require(`../../assets/${imgName}.${fallback}`) }
                type={`image/${fallback}`}
                role="presentation"
            />
            <img src={ require(`../../assets/${imgName}.${fallback}`) }
                role="presentation"
            />
        </picture>
    );
};

CompatibleImg.propTypes = {
    imgName: PropTypes.string.isRequired,
    fallback: PropTypes.string
};

export default CompatibleImg;

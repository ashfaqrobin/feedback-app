import PropTypes from 'prop-types';

const Header = (props) => {
    const headerStyles = {
        color: props.textColor,
        backgroundColor: props.bgColor,
    }
    return (
        <header className="header" style={headerStyles}>
            <div className='container'>
                            <h3>{props.logo}</h3>
            </div>
        </header>
    );
};

Header.defaultProps = {
    logo: 'Feedback UI!',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
};  

Header.propTypes = {
    logo: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header;

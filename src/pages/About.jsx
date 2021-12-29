import { Link } from 'react-router-dom';
import Card from '../components/layouts/Card';

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About the project</h1>
                <p>
                    This is a react app to leave feedback for any product or
                    service.
                </p>
                <Link to="/">Back to Home</Link>
            </div>
        </Card>
    );
};

export default AboutPage;

import React from 'react';
// import { graphql } from 'gatsby';
// import get from 'lodash/get';
// import { Helmet } from 'react-helmet';
import styles from './login.module.css';
import Layout from '../components/layout';
// import ArticlePreview from '../components/article-preview';
import { Button } from '@material-ui/core';
// import { PropTypes } from 'prop-types';
import useToken from '../components/useToken';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}
// const { token, setToken } = useToken();

// export default function Login({})
class LoginIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: useToken(),
            username: '',
            password: ''
        }
    }
    
    render() {
        const setToken = useToken();
        // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        // const [username, setUsername] = useState();
        // const [password, setPassword] = useState();
        
        // this.setState({ username: username, password: password})
        const username = this.state.username;
        const password = this.state.password;
        

        const handleSubmit = async (e) => {
            e.preventDefault();
            const token = await loginUser({
              username,
              password
            });
            setToken({ token: token });
            this.state.token ? console.log('token = ' + this.state.token) : console.log('no token')
        }
        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' } } className={styles.wrapper}>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Username</p>
                            <input type="text" onChange={e => this.setState({ username: e.target.value })}/>
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={e => this.setState({ password: e.target.value })}/>
                        </label>
                        <div className={styles.wrapper}>
                            <Button variant="outlined" type="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </Layout>
        ) 
    }
}

export default LoginIndex;
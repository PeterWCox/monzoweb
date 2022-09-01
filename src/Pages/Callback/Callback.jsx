import React from 'react';
import Loader from '../../components/Loader/Loader';
import { checkStatus } from '../../helpers';
import './Callback.css';
import Logo from '../../components/Logo/Logo';

class About extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      error: '',
    };
  }

  componentDidMount()
  {
    this.getToken();
  }

  getToken()
  {
    const queryString = window.location.search.replace('?', '').split('&').map((string) =>
    {
      const query = {};
      [, query[string.split('=')[0]]] = string.split('=');
      return query;
    });

    const code = queryString.find(query => !!query.code);

    if (!code || !code.code)
    {
      return this.setState({
        error: 'No login code present in URL, try logging into Monzo Web again',
      });
    }

    return fetch(`/api/token?code=${code.code}`)
      .then(checkStatus)
      .then(response => response.json())
      .then((body) =>
      {
        localStorage.setItem('monzo_access_token', body.access_token);
        localStorage.setItem('monzo_refresh_token', body.refresh_token);

        // window.location.href = '/accounts';
      })
      .catch((error) =>
      {
        this.setState({
          error: error.message,
        });
      });
  }

  render()
  {

    console.log(this.state.error);
    return (
      <div className="mzw-login">

        {/* Monzo logo on left */}
        <div className="mzw-login__info">
          <Logo large />
        </div>

        {/* Content */}
        <div className="mzw-login__form">

          {/* Title */}
          <h1>{this.state.error === "" ? "Authentication required" : "Oh no! an error has occured."}</h1>

          {/* Authorize message, but if error then show it */}
          <p>
            {this.state.error === "" ?
              "Authorize Monzo Web to use your Monzo account then click the button below to continue." :
              this.state.error
            }
          </p>

          {/* Only show Accounts redirect button  */}
          {this.state.error === "" ?
            (<a href="/accounts">
              <button
                className="mzw-button"
                onClick={() => this.getToken()}
              >
                {"Accounts"}
              </button>
            </a>

            ) : null}


        </div>

      </div>
    );
  }

}

export default About;

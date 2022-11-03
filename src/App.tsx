import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [url, setUrl] = useState<string>();

    useEffect(() => {
        const queryInfo = {active: true, lastFocusedWindow: true};

        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const url = tabs[0].url;
            setUrl(url);
        });
    }, []);


    return (
        <div>
          <div className="IASCard_ias-card-header__3v842">
            <h2>True Sight</h2>
          </div>
          <div className="IASCard_ias-card-body__3J5Uv">
            <h3>
              Current Web-Page URL 
            </h3>
            <a className="IASTypographicStyles_small-link__1Gebn">{url}</a>
            <h3>Segments Found</h3>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>Segment I</td>
                  </tr>
                  <tr>
                    <td>Segment II</td>
                  </tr>
                  <tr>
                    <td>Segment III</td>
                  </tr>
                  <tr>
                    <td>Segment IV</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Advertisers who have same targeting segments</h3>
              <div>
              <ul>
                <li>Advertiser I info - targeting segments matched</li>
                <li>Advertiser II info - targeting segments matched</li>
                <li>Advertiser III info - targeting segments matched</li>
              </ul>
              </div>
          </div>
        </div>
    );
};

export default App

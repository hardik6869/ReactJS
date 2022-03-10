import React from 'react';

function Deployment() {
    return (
        <>
            <div className="container">
                <hr />
                <table className="table table-striped table-secondary">
                    <tbody>
                        <tr>
                            <td className="p-3">Azure</td>
                            <td>Firebase</td>
                            <td>Github</td>
                            <td>Netlify</td>
                            {/* <td>Heroku</td> */}
                        </tr>
                        <tr>
                            <td className="p-3">
                                <a href="https://react-deployment-app.azurewebsites.net/">
                                    Live Demo
                                </a>
                            </td>
                            <td>
                                <a href="https://react-deployment-app.firebaseapp.com/">
                                    Live Demo
                                </a>
                            </td>
                            <td>
                                <a href="https://hardik6869.github.io/React-Deploy-App/">
                                    Live Demo
                                </a>
                            </td>
                            <td>
                                <a href="https://react-deployment-p7.netlify.app/">
                                    Live Demo
                                </a>
                            </td>
                            {/* <td>
                                <a href="https://create-deployment-app-p7.herokuapp.com/">
                                    Live Demo
                                </a>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
                <hr />
            </div>
        </>
    );
}

export default Deployment;

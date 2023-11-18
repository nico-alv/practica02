import './App.css';
import React, { useState, useEffect } from 'react';

function Profile() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/profile')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error al obtener datos:', error));
      }, []);

    if (!data) {
    return <div>Cargando perfil...</div>;
    }

    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perfil</title>
  <link rel="stylesheet" href="App.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <header className="head">
    <div>
      <h1 className="titulo">Perfil personal</h1>
      <h3>Hola, mi nombre es {data.name} {data.lastname}.</h3>
      <div className="imagenPerfil">
        <img width={90} height={110} src='pfp.jpg'/>
      </div>
      <p>{data.summary}</p>
      <p>Vivo en {data.city}, {data.country}.</p>
      <p>{data.email}</p>
      <div className="redesSociales">
        <a href="https://github.com/nico-alv">
          <i className="fab fa-github" />
        </a>
        <a href="https://instagram.com/nico._alvrz?igshid=YTQwZjQ0NmI0OA==">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100054628355935">
          <i className="fab fa-facebook" />
        </a>
      </div>
    </div>
  </header>
  <div className="container contenedorFlex">
    <section className="datosPersonales">
    <h2>Intereses</h2>
    <h4>Mis hobbies e intereses son...</h4>
    <table>
        <tbody>
        {data.hobbies.map(hobby => (
            <tr key={hobby.name}>
            <th>{hobby.name}</th>
            <td>{hobby.description}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </section>
    <section className="herramientas">
        <h2>Herramientas Tecnológicas</h2>
        <h4>Algunas herramientas que conozco son...</h4>
        <table>
        <tbody>
            {data.frameworks.map(framework => (
            <tr key={framework.name}>
                <th>{framework.name}</th>
                <td>Nivel: {framework.level}, Año: {framework.year}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </section>
  </div>
</>
    );
    
};

export default Profile;
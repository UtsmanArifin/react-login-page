import './App.css';

function App() {

  const bodyStyle = {
      height: '100vh',
      width: '100vw',
      margin: '0',
      padding: '0',
      backgroundImage: `url(https://wallpaperaccess.com/full/1152513.jpg)`,
      backgroundSize: 'cover',
  }
  const flex_container = {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
  }
  const left = {
      flex: 'auto',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '250px',
      alignItems: 'center',
  }
  const left_h1 = {
      color: 'whitesmoke',
      fontSize: '50px',
  }
  const left_h2 = {
      color: 'whitesmoke',
      fontSize: '35px',
      marginTop: '0px',
  }
  const right = {
      flex: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '150px',
  }
  const login = {
      backgroundColor: 'blanchedalmond',
      textAlign: 'left',
      padding: '35px',
      borderRadius: '20px',
  }
  const login_label = {
      fontSize: '17px',
      marginBottom: '15px',
  }
  const login_input = {
      padding: '3px',
      marginTop: '5px',
      marginBottom: '15px',
  }

  return (
    <body style={bodyStyle}>
      <div style={flex_container}>
          <div style={left}>
              <h1 style={left_h1}>SMM Batch 2</h1>
              <h2 style={left_h2}> <i>Front End Hands On</i> </h2>
          </div>
          
          <div style={right}>
              <form style={login}>
                  <label style={login_label}>User Name</label>
                  <br/>
                  <input style={login_input} type="text" name="username" id="username"/>
                  <br/>
                  <label style={login_label}>Password</label>
                  <br/>
                  <input style={login_input} type="password" name="password" id="password"/>
                  <br/>
                  <button>Login</button>
              </form>
          </div>
      </div>
    </body>
  );
}

export default App;

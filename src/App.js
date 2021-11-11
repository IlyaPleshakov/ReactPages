import logo from './logo.svg';
import './App.css';

import MainComp from './mainComponent';
import MainPage from './MainPage';

 function MyButton(props){
      return(<div>
        <button className="button" onClick={props.onClick}>{props.name} </button>
        </div>
      );
  }
  function press(){
    var xhttp = new XMLHttpRequest();
    xhttp.responseType='json';
    xhttp.open("GET", "http://localhost:8080/Backend/servlet", true);
    xhttp.onload = function() {
      if (xhttp.readyState === 4)  { 
        var jsonResponse = xhttp.response;
        alert(jsonResponse);
        console.log('response', this.response);
      }
    };
    xhttp.send();
  }


  function LoginButton(){
    return(<div>
      <MyButton name="Войти"/>
      <MyButton name="Регистрация"/>
      </div>
    );
  }

  function MyInput(){
    return(
      <div>
      <form>
      Введите логин
      <input type="text" name="login"/><br/>
      Введите пароль 
      <input type="text" name="password"/>
      </form> 
      </div>
    );
  }

  function LoginInput(){
    return (<div>
      
      <MyInput/>
      </div>
    );
  }

  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

var styleLogin={

  
  width:'400px',
  marginLeft:'auto',
  marginRight:'auto',
  padding: '5% 0',
}

function LoginForm(){
    return(
      <div style={styleLogin}>
        <><LoginInput /><LoginButton /></>
      </div>
    );

}


function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}


function App() {
  return (
    <div className="App">
      <MainComp/>
      <MainPage/>
          <div>
          <Footer/>
          </div>
    </div>
  );
}

export default App;

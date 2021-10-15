import logo from './logo.svg';
import './App.css';

function Person (props){
  return (<div>
    <hi>Имя {props.name}</hi>
    <hi>Возраст {props.age}</hi>
  </div>);
  }
  
  function Hi (){
    return (<div>
      <Person name="Илья" age="27"/>
      <Person name="Иван" age="37"/>
      <Person name="Федор" age="17"/>
    </div>
    );
    }

  function MyButton(props){
      return(<div>
        <button class="button">{props.name} </button>
        </div>
      );
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><Hi/></h1>
      </header>
        <div >
         <LoginInput/>
         <LoginButton/>
        </div>
        <div>
          <footer>
            <h2>Footer</h2>
          </footer>
          </div>
    </div>
  );
}

export default App;

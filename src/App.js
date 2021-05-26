import './index.scss'
import FormContainer from "./components/FormContainer";

function App() {
  return (
    <main className="main">
      <div className="main-form">
        <div className="main-form-steps">
          Step 1 of 3 <span className="main-form-steps-activeCircle" /> <span /> <span />
        </div>
        <FormContainer />
      </div>
      <div className="main-content">
        <h1 className="main-content-title"> Dummy Heading </h1>
        <p className="main-content-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </main>
  );
}

export default App;

import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';
import ColorText from './Components/ColorText';

function HelloProps(props) {
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

function App() {
  return (
    <div>
      <Hello name="북극곰" />
      <Time />
      <Resume hello="안녕하세요" name="북극곰알파카" hobby="독서" food="알리오올리오" color="green" />
      <ColorText color="red" />
      <ColorText color="yellow" />
      <ColorText color="blue" />
      <HelloProps
        name="bsy"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
    </div>
  );
}

export default App;

import {useState} from 'react';




const App = () => {
  
  function UserDetailsComponent() {
    var [userDetails, setUserDetails] = useState({
      name: "Mayank",
      age: 30
    });
                                                 
    return (
      <div>
        <h1>This is the Parent Component</h1><hr/>
        <ChildComponent userDetails={userDetails}></ChildComponent>
      </div>                                         
    )
  }
  
  function ChildComponent(props) {
    return (
      <div>
        <h2>This is Child Component</h2><hr/>
        <SubChildComponent userDetails={props.userDetails}></SubChildComponent>
      </div>
    )
  }
  
  function SubChildComponent(props) {
    return (
      <div>
        <h3>This is Sub Child Component</h3>
        <h4>User Name: {props.userDetails.name}</h4>
        <h4>User Age: {props.userDetails.age}</h4>
      </div>
    )
  }
};

export default App;
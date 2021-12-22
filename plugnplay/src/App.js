// // import React, { useState } from "react";

// // export default function GrowingButton() {
//   const [width, setWidth] = useState(50);

//   // call setWidth with functional update
//   const increaseWidth = () => setWidth((previousWidth) => previousWidth + 10);



//   return (
//     <>
//       <h1>Click the button below to see if grow:</h1>
//       <button style={{ width }} onClick={increaseWidth}>
//         I grow
//       </button>
//     </> 
//   );
// }


import React, { useState,useEffect  } from "react";

// export default function App() {
//   const [state, setState] = useState({ name: "React" });
//   const updateState = () => {
//     // state isn't merged
//     setState({ creator: "Facebook" });
//     //uncomment to merge state
//     setState((prevState) => ({ ...prevState, creator: "Facebook" }));
//   };
//   return (
//     <>
//       <pre>{JSON.stringify(state)}</pre>
//       <button onClick={updateState}>update state</button>
//     </>
//   );
// }


export default function Greet({ name }) {
  const message = `Hello, ${name}!`;   // Calculates output
  useEffect(() => {
    // Good!
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);
  return <div>{message}</div>;         // Calculates output
}
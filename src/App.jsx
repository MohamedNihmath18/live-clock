// import Clock from "./components/Clock";

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px"}}>
//       {/* <h1>Live Digital Clock</h1> */}
//       <Clock />
//     </div>
//   );
// }

// export default App;

import Clock from "./components/Clock";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      backgroundColor: "#282c34",
      color: "white"
    }}>
      <Clock />
    </div>
  );
}

export default App;

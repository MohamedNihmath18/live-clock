// import { useState, useEffect } from "react";

// const Clock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // Update the time every second
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Format time and date
//   const formattedTime = time.toLocaleTimeString();
//   const formattedDate = time.toLocaleDateString(undefined, {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.time}>{formattedTime}</h1>
//       <h2 style={styles.date}>{formattedDate}</h2>
//     </div>
//   );
// };

// // Basic inline styles
// // const styles = {
// //   container: {
// //     textAlign: "center",
// //     fontSize: "24px",
// //     marginTop: "20px",
// //     fontFamily: "Arial, sans-serif",
// //   },
// //   time: {
// //     fontSize: "50px",
// //     fontWeight: "bold",
// //     color: "darkblue",
// //   },
// //   date: {
// //     fontSize: "24px",
// //     color: "#333",
// //   },
// // };

// const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",  // Full screen height
//       width: "100vw",   // Full screen width
//       textAlign: "center",
//       fontSize: "24px",
//       fontFamily: "Arial, sans-serif",
//     },
//     time: {
//       fontSize: "50px",
//       fontWeight: "bold",
//       color: "darkblue",
//     },
//     date: {
//       fontSize: "24px",
//       color: "#333",
//     },
//   };
  

// export default Clock;


import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time and date
  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{formattedTime}</h1>
      <h2 style={styles.date}>{formattedDate}</h2>
    </div>
  );
};

// CSS styles for centering the clock
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full screen height
    width: "100vw",  // Full screen width
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white", // White background
    color: "black", // Black text
  },
  time: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "black", // Black time text
    marginBottom: "5px",
  },
  date: {
    fontSize: "28px",
    color: "#333", // Slightly dark grey for the date
    marginTop: "0px", 
  },
};

export default Clock;

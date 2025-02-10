import React, { useEffect, useState } from "react";
import { fetchChat } from "../connectToAI.js"
import { Link } from "react-router-dom";
const GenerateReview = ({ moodQuestion, setDataFetch, dataFetch }) => {

  const [data, setData] = useState(null)

  const fetchDate = async () => {
    const res = await fetch("https://review-it-9ad51-default-rtdb.firebaseio.com/collection.json");
    // console.log(await res.json())
    const parsedData = await res.json();

    // setData(parsedData)
    setData(parsedData)



  }
  const copyToClipboard = () => {
    if (!navigator.clipboard) {
      // Fallback for browsers that don't support navigator.clipboard
      const tempInput = document.createElement("textarea");
      tempInput.value = dataFetch.text; // Replace with the actual text you want to copy
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        console.log("Fallback: Text copied to clipboard!");
      } catch (err) {
        console.error("Fallback: Failed to copy text: ", err);
      }
      document.body.removeChild(tempInput);
      return;
    }

    navigator.clipboard.writeText(dataFetch.text).then(() => {
      //   alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });


  };
  useEffect(() => {
    console.log(window.location.href.split("?"))
    fetchDate()
    // if(window.location.href.split("?")[1]===) return

  }
    , [])

  return (
    
    data && data.map((e,i) => {
      if (e.compTitle === window.location.href.split("?")[1]) {
        return (
          <div style={styles.container}>
            <textarea
              style={styles.textarea}
              value={dataFetch.text}
              readOnly
            />
            <Link to={`${e.reivewUrl}`} style={styles.button} disabled={dataFetch.isLoading} onClick={copyToClipboard} onMouseEnter={handleHover} onMouseLeave={handleHover}>
              Copy & Review
            </Link>
          </div>
        )
      }
    })
  );
};

const handleHover = (event) => {
  if (event.type === "mouseenter") {
    event.target.style.transform = "scale(1.05)";
    event.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
    // event.target.style.background = "linear-gradient(90deg,rgb(69, 2, 46),rgb(45, 0, 118)" 
  } else if (event.type === "mouseleave") {
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    // event.target.style.background = "linear-gradient(90deg,rgb(45, 0, 118),rgb(69, 2, 46))"
  }
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f3f3f3",
  },
  textarea: {
    width: "80%",
    maxWidth: "500px",
    height: "150px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    resize: "none",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    // background: "linear-gradient(90deg, #28a745, #85d96a)",
    backgroundColor:"black",  
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textDecoration:"none",
    transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
  },
};

export default GenerateReview;

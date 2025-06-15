// import { MouseEvent } from "react";

import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Ghana", "Cameroon", "Nigeria", "Malawi", "Gabon", "Ethiopia"];
//   const handleSelectItem = (item: string) =>{
//     console.log(item)
//   }
//   return (
//     <>
//     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//     </>
//   )

// }
function App() {
 const [alertVisible, setAlertVisibility] = useState(false);
 return (
 <div>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
      <span>My Alert</span>
    </Alert>}
    <Button onClick={() => setAlertVisibility(true)} color="info">
      Click
    </Button>
  </div>
 )
}
export default App;

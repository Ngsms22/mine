import { useState } from "react";

//using props
//{ items:[], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


function ListGroup ({items, heading, onSelectItem}: Props) {

//   return <h1>list group</h1>;
  
  //let selectedIndex = -1 // this is used to track which item is selected, -1 means no item is selected
  //A hook (fucntion that allows us to tap into built in functions in react)
  //useState //state hook
  const [selectedIndex, setSelectedIndex] = useState(-1)
//   const handleClick = (event: MouseEvent) => console.log(event)
//   items = []
  if (items.length===0)
    return(
      <>
        <h2>title here</h2>
        <h3>List is empty</h3>
      </>
    )
  const message = items.length===0 ? <p>List is empty</p> : null
  const getMessage = () => {
    // return items.length===0 ? <p>List is empty</p> : null
    return items.length === 0 && <p>List is empty</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}{" "}
      {/*using functions are advantageous as they can have different parameters enabling a display of different messages */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex (index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

}
export default ListGroup;

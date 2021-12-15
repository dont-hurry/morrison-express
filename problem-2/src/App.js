import { useState } from "react";
import ListItem from "./components/ListItem";

export default function App() {
  const [listItems, setListItems] = useState([
    { id: 0, selectable: true, checked: false },
    { id: 1, selectable: false, checked: false },
    { id: 2, selectable: true, checked: false },
    { id: 3, selectable: true, checked: false },
    { id: 4, selectable: true, checked: false },
    { id: 5, selectable: true, checked: false },
    { id: 6, selectable: true, checked: false },
    { id: 7, selectable: true, checked: false },
    { id: 8, selectable: false, checked: false },
    { id: 9, selectable: true, checked: false },
    { id: 10, selectable: true, checked: false },
    { id: 11, selectable: false, checked: false },
    { id: 12, selectable: true, checked: false },
  ]);
  const [lastSelectCheckboxId, setLastSelectCheckboxId] = useState(null);

  const selectCheckbox = (id, shiftKey) => {
    let newListItems;

    if (!shiftKey) {
      newListItems = listItems.map((listItem) =>
        listItem.id === id
          ? { ...listItem, checked: !listItem.checked }
          : listItem
      );
    } else if (lastSelectCheckboxId !== null) {
      let startId = Math.min(id, lastSelectCheckboxId);
      let endId = Math.max(id, lastSelectCheckboxId);

      newListItems = listItems.map((listItem) => {
        const inBetween = startId <= listItem.id && listItem.id <= endId;
        return inBetween ? { ...listItem, checked: true } : listItem;
      });
    }

    if (newListItems) {
      setListItems(newListItems);
      setLastSelectCheckboxId(id);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th></th>
          <th>狀態</th>
        </tr>
      </thead>

      <tbody>
        {listItems.map(({ id, selectable, checked }) => (
          <ListItem
            key={id}
            selectable={selectable}
            checked={checked}
            onChange={(e) => selectCheckbox(id, e.nativeEvent.shiftKey)}
          />
        ))}
      </tbody>
    </table>
  );
}

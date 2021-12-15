export default function ListItem({ selectable, checked, onChange }) {
  return (
    <tr>
      <td>
        {selectable && (
          <input type="checkbox" checked={checked} onChange={onChange} />
        )}
      </td>
      <td></td>
      <td>00-未派車</td>
    </tr>
  );
}

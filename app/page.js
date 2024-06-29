import { columnsNames, data, names } from "./constants";

export default function Home() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {columnsNames.map(column => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row,ind) => {
          return <tr key={ind}>
            <th className="text-left">{row.rowName}</th>
            {row.data.map((rowData,index) => <td key={index} className={`${names[rowData]}`}>{rowData}</td>)}
          </tr>;
        })}
      </tbody>
    </table>
  );
}

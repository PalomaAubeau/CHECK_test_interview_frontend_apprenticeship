import "./style.css";
const NameList = ({ names }: { names: string[] }) => {
  return (
    <ul className="name-list">
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;

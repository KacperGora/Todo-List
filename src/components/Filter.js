const Filter = ({ status, setStatus }) => {
  const changeFilterStatusHandler = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  return (
    <div>
      <select onChange={changeFilterStatusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter;

const Filter = () => {
    const filterHandler = (e) => 
    console.log(e.target.value);
  return (
    <div>
      <select onChange={filterHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter

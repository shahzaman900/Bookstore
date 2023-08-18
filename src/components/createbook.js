export default function CreateBook() {
  return (
    <>
      <h1>Create Book </h1>
      <div>
        <input type="text" placeholder="Enter book name" />
        <select name="auther">
          <option value="volvo">select auther</option>
          <option value="saab">Shah</option>
          <option value="mercedes">Zaman</option>
          <option value="audi">Khan</option>
        </select>
        <button type="submit">Add Book</button>
      </div>
    </>
  );
}

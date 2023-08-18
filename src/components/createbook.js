export default function CreateBook() {
  return (
    <>
      <h1>Create Book </h1>
      <div>
        <input type="text" placeholder="Enter book name" />
        <select name="auther">
          <option value="volvo">select auther</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button type="button">Add Book</button>
      </div>
    </>
  );
}

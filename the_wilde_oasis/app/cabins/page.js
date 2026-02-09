import Log from "./Log";

async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("data", data);

  return (
    <div>
      Cabin page
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {/* <Log users={data} /> */}
    </div>
  );
}

export default Page;

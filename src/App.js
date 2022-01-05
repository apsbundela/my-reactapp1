export default function App() {
  return (
    <div>
      <div>
        <Headertag></Headertag>
        <Mytag></Mytag>
        <Mytag></Mytag>
        <Mytag></Mytag>
        <Mytag></Mytag>
        <Mytag></Mytag>
        <Mytag></Mytag>
        <Mytag></Mytag>
        <Mytag></Mytag>
      </div>
    </div>
  );
}

function Mytag() {
  return (
    <div>
      <div className="bg-info">
        <h3 className="mt-2">I am Creating My First Tag</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          voluptatibus, architecto maiores consequuntur cumque, iste eos sed,
          fugiat eius recusandae et itaque quae explicabo obcaecati odit quasi
          placeat adipisci alias!
        </p>
      </div>
    </div>
  );
}

function Headertag() {
  return (
    <div className="container-fluid sticky-top">
      <div className="row bg-dark text-light fs-4 p-3">React</div>
    </div>
  );
}

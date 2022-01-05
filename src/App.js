export default function App() {
  let list = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 9,1];
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="row">
        {list.map(() => (
          <div className="col-sm-12 col-md-4">
            <Mycard></Mycard>
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <div className="row bg-dark text-light p-3 fs-4 sticky-top">
        <div>React App</div>
      </div>
    </div>
  );
}

function Mycard() {
  let title = "Product";

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque
        hic est excepturi incidunt iste praesentium nihil eius vel fuga eveniet
        assumenda, aut modi nemo quia eaque sapiente distinctio architecto.
        <input
          className=" btn btn-sm btn-outline-secondary w-50 mt-2"
          type="button"
          value="Buy"
        />
        <input
          className=" btn btn-sm btn-outline-secondary w-50  mt-2"
          type="button"
          value="Addt to cart"
        />
      </div>
    </div>
  );
}

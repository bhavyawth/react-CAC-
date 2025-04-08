import { useState } from 'react'
import './App.css'
import products from './assets/data'  // Ensure this file exists

function SearchBar({ filterText, inStockOnly, setFilterText, setInStockOnly }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input 
        type='text'
        placeholder='Search Item...' 
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div>
        <input 
          type='checkbox' 
          id='stockCheck' 
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)} // FIXED
        />
        <label htmlFor='stockCheck'>Only show Items in stock</label>
      </div>
      <br />
    </div>
  )
}

function ProductTable({ products, inStockOnly, filterText }) {
  const rows = []
  let prevCategory = null

  products.forEach(e => {
    if (e.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !e.stocked) {
      return;
    }
    if (e.category !== prevCategory) {
      rows.push(
        <ProductsCategoryRow category={e.category} key={e.category} />
      );
    }

    rows.push(
      <ProductsRow product={e} key={e.name} />
    );

    prevCategory = e.category;
  });
  if (rows.length == 0) rows.push(<div>No matching items found!</div>)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function ProductsCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}

function ProductsRow({ product }) {
  const name = product.stocked ? product.name : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td> 
    </tr> // FIXED: Removed incorrect <span>
  )
}

function App() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{
      borderRadius: "15px",
      borderColor: "blue",
      borderWidth: "5px",
      borderStyle: "solid",
      padding: "8px",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        setFilterText={setFilterText} 
        setInStockOnly={setInStockOnly} 
      />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  )
}

export default App

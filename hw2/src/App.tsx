import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import { products } from './data/products'
import './App.css'

function App() {
    const handleBuy = (title: string) => {
        alert(`Вы купили товар: ${title}`)
    }

    return (
        <div className="app">
            <Header />
            <ProductList products={products} onBuy={handleBuy} />
        </div>
    )
}

export default App
import Rating from "./rating"

export default function Products({product}){
    return <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description.slice()}</td>
                <td><span className="badge badge-pill bg-dark">{product.category}</span></td>
                <td><img width={250} src={product.image} alt={product.tittle}/></td>
                <td><Rating count={product.rating.count} rate={product.rating.rate} /></td>
                
           </tr>
}
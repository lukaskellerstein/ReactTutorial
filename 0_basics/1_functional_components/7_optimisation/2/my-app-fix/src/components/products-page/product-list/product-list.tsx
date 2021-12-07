import { Button, Card } from "@fluentui/react-northstar";
import { CarDTO } from "../../../DTOs/Car.dto";
import "./product-list.scss";

type ProductListProps = {
  items: CarDTO[];
  onRemove: (id: string) => void;
};

const ProductList = (props: ProductListProps) => {
  const onRemoveClick = (id: string | null | undefined) => {
    if (id) {
      props.onRemove(id);
    }
  };

  const ProductItem = (item: CarDTO) => {
    return (
      <div className="product-item" key={item.id}>
        <Card>
          <Card.Body className="card-inputs">
            <h1>
              {item.brand} {item.model}
            </h1>
            <p>{item.HP}</p>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => onRemoveClick(item.id)}>Remove</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  };

  return (
    <div className="product-list-wrapper">
      {props.items.map((item: CarDTO) => {
        return ProductItem(item);
      })}
    </div>
  );
};

export default ProductList;

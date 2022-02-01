import { Button, Card } from "@fluentui/react-northstar";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme.context";
import { CarDTO } from "../../../DTOs/Car.dto";
import "./product-list.scss";

type ProductListProps = {
  items: CarDTO[];
  onRemove: (id: string) => void;
};

const ProductList = (props: ProductListProps) => {
  const { theme } = useContext(ThemeContext);

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
            <Button
              className={theme + "-pp"}
              onClick={() => onRemoveClick(item.id)}
            >
              Remove
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  };

  console.log("product-list", props);

  return (
    <div className="product-list-wrapper">
      {props.items.map((item: CarDTO) => {
        return ProductItem(item);
      })}
    </div>
  );
};

export default ProductList;

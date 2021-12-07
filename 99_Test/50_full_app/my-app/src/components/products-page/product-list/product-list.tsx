import { Button, Card, CardActions, CardContent } from "@mui/material";
import { CarDTO } from "../../../DTOs/Car.dto";
import "./product-list.scss";

type ProductListProps = {
  items: object;
};

const ProductList = (props: ProductListProps) => {
  const ProductItem = (item: CarDTO) => {
    return (
      <div className="product-item" key={item.id}>
        <Card>
          <CardContent className="card-inputs">
            <h1>
              {item.brand} {item.model}
            </h1>
            <p>{item.HP}</p>
          </CardContent>
          <CardActions className="card-buttons">
            <Button color="primary" variant="outlined">
              Remove
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };

  const items: Array<CarDTO> = Object.entries(props.items).reduce(
    (acc: Array<CarDTO>, [key, val]: [string, any]) => {
      const newCar: CarDTO = {
        id: key,
        brand: val.brand,
        model: val.model,
        HP: val.HP,
      };
      acc.push(newCar);
      return acc;
    },
    []
  );

  return (
    <div className="product-list-wrapper">
      {items.map((item: CarDTO) => {
        return ProductItem(item);
      })}
    </div>
  );
};

export default ProductList;

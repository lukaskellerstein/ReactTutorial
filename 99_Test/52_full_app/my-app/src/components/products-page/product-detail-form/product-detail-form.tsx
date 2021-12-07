import { Button, Card, Input } from "@fluentui/react-northstar";
import { useState } from "react";
import { CarDTO } from "../../../DTOs/Car.dto";
import "./product-detail-form.scss";

type ProductDetailFormProps = {
  onAdd: (x: CarDTO) => void;
};

const ProductDetailForm = (props: ProductDetailFormProps) => {
  const [formState, setFormState] = useState({
    brand: "",
    model: "",
    hp: "",
  });

  const addProduct = () => {
    props.onAdd({
      brand: formState.brand,
      model: formState.model,
      HP: formState.hp,
    });

    // reset form
    setFormState({
      brand: "",
      model: "",
      hp: "",
    });
  };

  const formHasChanged = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="product-detail-form-wrapper">
      <Card>
        <Card.Body className="card-inputs">
          <Input
            id="brand-input"
            label="Brand"
            name="brand"
            value={formState.brand}
            onChange={formHasChanged}
            required
          />
          <Input
            id="model-input"
            label="Model"
            name="model"
            value={formState.model}
            onChange={formHasChanged}
            required
          />
          <Input
            id="horsepower-input"
            label="HorsePower"
            name="hp"
            value={formState.hp}
            onChange={formHasChanged}
            required
          />
        </Card.Body>
        <Card.Footer fitted>
          <Button content="Send" onClick={addProduct} />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductDetailForm;

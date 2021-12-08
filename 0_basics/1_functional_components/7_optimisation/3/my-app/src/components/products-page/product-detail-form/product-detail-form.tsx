import { Button, Card, Input, Ref } from "@fluentui/react-northstar";
import { useRef } from "react";
import { CarDTO } from "../../../DTOs/Car.dto";
import "./product-detail-form.scss";

type ProductDetailFormProps = {
  onAdd: (x: CarDTO) => void;
};

const ProductDetailForm = (props: ProductDetailFormProps) => {
  const brandInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);
  const hpInputRef = useRef<HTMLInputElement>(null);

  const addProduct = () => {
    if (
      !brandInputRef ||
      !brandInputRef.current ||
      brandInputRef.current.value === ""
    ) {
      console.log("Brand has to be filled !");
      return;
    }

    if (
      !modelInputRef ||
      !modelInputRef.current ||
      modelInputRef.current.value === ""
    ) {
      console.log("Model has to be filled !");
      return;
    }

    if (!hpInputRef || !hpInputRef.current || hpInputRef.current.value === "") {
      console.log("HP has to be filled !");
      return;
    }

    props.onAdd({
      brand: brandInputRef.current.value,
      model: modelInputRef.current.value,
      HP: hpInputRef.current.value,
    });

    // reset form
    brandInputRef.current.value = "";
    modelInputRef.current.value = "";
    hpInputRef.current.value = "";
  };

  return (
    <div className="product-detail-form-wrapper">
      <Card>
        <Card.Body className="card-inputs">
          <Ref innerRef={brandInputRef}>
            <Input id="brand-input" label="Brand" name="brand" required />
          </Ref>
          <Ref innerRef={modelInputRef}>
            <Input id="model-input" label="Model" name="model" required />
          </Ref>
          <Ref innerRef={hpInputRef}>
            <Input
              id="horsepower-input"
              label="HorsePower"
              name="hp"
              required
            />
          </Ref>
        </Card.Body>
        <Card.Footer fitted>
          <Button content="Send" onClick={addProduct} />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductDetailForm;

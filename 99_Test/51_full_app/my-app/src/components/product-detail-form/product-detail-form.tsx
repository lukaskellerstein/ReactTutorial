import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import { CarDTO } from "../../DTOs/Car.dto";
import "./product-detail-form.scss";

type ProductDetailFormProps = {
  onAdd: (x: CarDTO) => void;
};

const ProductDetailForm = (props: ProductDetailFormProps) => {
  const brandInputRef = useRef<HTMLInputElement>();
  const modelInputRef = useRef<HTMLInputElement>();
  const horsePowerInputRef = useRef<HTMLInputElement>();

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

    if (
      !horsePowerInputRef ||
      !horsePowerInputRef.current ||
      horsePowerInputRef.current.value === ""
    ) {
      console.log("HP has to be filled !");
      return;
    }

    props.onAdd({
      brand: brandInputRef.current.value,
      model: modelInputRef.current.value,
      HP: horsePowerInputRef.current.value,
    });

    // reset form
    brandInputRef.current.value = "";
    modelInputRef.current.value = "";
    horsePowerInputRef.current.value = "";
  };

  return (
    <div className="product-detail-form-wrapper">
      <Card>
        <CardContent className="card-inputs">
          <TextField id="brand-input" label="Brand" inputRef={brandInputRef} />
          <TextField id="model-input" label="Model" inputRef={modelInputRef} />
          <TextField
            id="horsepower-input"
            label="HorsePower"
            inputRef={horsePowerInputRef}
          />
        </CardContent>
        <CardActions className="card-buttons">
          <Button color="primary" variant="outlined" onClick={addProduct}>
            Add
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductDetailForm;

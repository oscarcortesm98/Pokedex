import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";


export default configureStore({
  reducer: {
    //Aquí van nuestros estados globales (slices)
    nameTrainer

  }
})
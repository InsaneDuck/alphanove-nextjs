import {configureStore} from "@reduxjs/toolkit";
import {formReducer} from "@/store/form-slice";
import {bookReducer} from "@/store/book-slice";


export const store = configureStore({
    reducer: {
        form: formReducer,
        book: bookReducer
    }
});

// for useSelector
export type RootState = ReturnType<typeof store.getState>
// for useDispatch
export type AppDispatch = typeof store.dispatch
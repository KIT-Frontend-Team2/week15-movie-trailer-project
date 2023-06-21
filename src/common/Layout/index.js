import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {path:'/', element:<MainPage/>},
    {path:'/', element:<DetailPage/>}
])

export default router;

import { createRoot } from "react-dom/client";
import { Home } from "./Home";

import "./global.css";

const root = createRoot(document.getElementById("root"));

root.render(<Home />);

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IndexPage } from "./Views/IndexPage"
import { Layout } from "./Layout/Layout"
import { FavoritePage } from "./Views/FavoritePage"

export const IndexApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/favorite" element={<FavoritePage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
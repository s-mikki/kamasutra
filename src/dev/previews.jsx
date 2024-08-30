import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Header from "../components/simple/header/Header";
import Navbar from "../components/simple/navbar/Navbar";
import Post from "../components/ordinary/post/Post";
import DataItem from "../components/ordinary/data-item/data-item";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/Post">
                <Post/>
            </ComponentPreview>
            <ComponentPreview path="/DataItem">
                <DataItem/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
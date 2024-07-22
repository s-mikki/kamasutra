import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Header from "../components/simple/header/Header";
import Navbar from "../components/simple/navbar/Navbar";
import Post from "../components/ordinary/my-posts/Post";

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
        </Previews>
    )
}

export default ComponentPreviews
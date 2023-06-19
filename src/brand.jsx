import React, {useState} from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import brandimg from "./brandlogo.png"; 



function Brand() {
    return (
        <div className="background">
            <h4>What is your bike's brand?</h4>
            <MDBCol md="6">
                <form className="form-inline mt-4 mb-4" id="brandSearch">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75" 
                    type="text" placeholder="See all bike brands" aria-label="Search" value={input} onChange={(e) => console.log(e)}
                    />
                </form>
            </MDBCol>
            <p>TOP BRANDS</p>
            <div className="topbrands">
                <div className="Brand1">
                    <img src={brandimg} alt="Brand1" id="brandimg"/>
                    <h5>Suzuki</h5>
                </div>
                <div className="Brand1">
                    <img src={brandimg} alt="Brand1" id="brandimg"/>
                    <h5>Honda</h5>
                </div>
                <div className="Brand1">
                    <img src={brandimg} alt="Brand1" id="brandimg"/>
                    <h5>Audi</h5>
                </div>
                <div className="Brand1">
                    <img src={brandimg} alt="Brand1" id="brandimg"/>
                    <h5>Mercedes</h5>
                </div>
                <div className="Brand1">
                    <img src={brandimg} alt="Brand1" id="brandimg"/>
                    <h5>Ford</h5>
                </div>
            </div>
        </div>
    )

}
const [input, setInput] = useState("");

export default Brand;